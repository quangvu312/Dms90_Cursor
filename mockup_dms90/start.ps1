# Chay mockup_dms90 bang PowerShell
# - Co Node (he thong hoac portable): chay React Vite
# - Khong cai Node duoc: tu tai Node portable (khong can Administrator)
# - Khong tai duoc Node: phuc vu dist/ (neu da build) hoac Prototype tinh
#
# Usage:
#   .\start.ps1
#   .\start.ps1 -Mode react
#   .\start.ps1 -Mode static
#   npm run dev          (khi da co Node tren PATH)

param(
  [ValidateSet('auto', 'react', 'static')]
  [string]$Mode = 'auto',
  [int]$Port = 0
)

$ErrorActionPreference = 'Stop'
$Root = [System.IO.Path]::GetFullPath($PSScriptRoot).TrimEnd('\')
$ToolsDir = Join-Path $Root '.tools'
$NodeVersion = '22.19.0'
$NodeFolderName = "node-v$NodeVersion-win-x64"
$PortableNodeHome = Join-Path $ToolsDir $NodeFolderName

function Write-Info([string]$Message) {
  Write-Host $Message
}

function Get-SystemNodeHome {
  $nodeCmd = Get-Command node.exe -ErrorAction SilentlyContinue
  if (-not $nodeCmd) { return $null }
  $homeDir = Split-Path -Parent $nodeCmd.Source
  $npm = Join-Path $homeDir 'npm.cmd'
  if (Test-Path -LiteralPath $npm) { return $homeDir }
  return $null
}

function Test-PortableNode {
  $exe = Join-Path $PortableNodeHome 'node.exe'
  $npm = Join-Path $PortableNodeHome 'npm.cmd'
  return (Test-Path -LiteralPath $exe) -and (Test-Path -LiteralPath $npm)
}

function Install-PortableNode {
  New-Item -ItemType Directory -Force -Path $ToolsDir | Out-Null
  $zip = Join-Path $ToolsDir "$NodeFolderName.zip"
  $url = "https://nodejs.org/dist/v$NodeVersion/$NodeFolderName.zip"
  Write-Info "Dang tai Node portable v$NodeVersion (khong can cai dat he thong)..."
  [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
  Invoke-WebRequest -Uri $url -OutFile $zip -UseBasicParsing
  Write-Info "Dang giai nen..."
  Expand-Archive -LiteralPath $zip -DestinationPath $ToolsDir -Force
  Remove-Item -LiteralPath $zip -Force -ErrorAction SilentlyContinue
  if (-not (Test-PortableNode)) {
    throw "Tai Node portable that bai. Khong thay node.exe/npm.cmd trong $PortableNodeHome"
  }
  Write-Info "Node portable san sang: $PortableNodeHome"
}

function Resolve-NodeHome {
  $system = Get-SystemNodeHome
  if ($system) {
    Write-Info "Dung Node he thong: $system"
    return $system
  }
  if (Test-PortableNode) {
    Write-Info "Dung Node portable: $PortableNodeHome"
    return $PortableNodeHome
  }
  try {
    Install-PortableNode
    return $PortableNodeHome
  } catch {
    Write-Info "Khong tai duoc Node portable: $($_.Exception.Message)"
    return $null
  }
}

function Use-NodePath([string]$NodeHome) {
  $env:Path = "$NodeHome;$env:Path"
}

function Start-Vite([string]$NodeHome, [int]$ListenPort) {
  Use-NodePath $NodeHome
  Set-Location $Root
  $npm = Join-Path $NodeHome 'npm.cmd'
  if (-not (Test-Path -LiteralPath (Join-Path $Root 'node_modules'))) {
    Write-Info "Dang npm install..."
    & $npm install --no-fund --no-audit
    if ($LASTEXITCODE -ne 0) { throw "npm install that bai (exit $LASTEXITCODE)" }
  }
  Write-Info "React Vite: http://localhost:$ListenPort/"
  Write-Info "Nhan Ctrl+C de dung."
  Start-Process "http://localhost:$ListenPort/"
  & $npm run dev -- --host localhost --port $ListenPort
}

function Start-FileServer {
  param(
    [string]$DocRoot,
    [int]$ListenPort,
    [string]$DefaultFile,
    [switch]$Spa,
    [string]$Banner
  )

  $docRoot = [System.IO.Path]::GetFullPath($DocRoot).TrimEnd('\') + '\'
  $prefix = "http://localhost:$ListenPort/"
  $mime = @{
    '.html' = 'text/html; charset=utf-8'
    '.css'  = 'text/css; charset=utf-8'
    '.js'   = 'application/javascript; charset=utf-8'
    '.mjs'  = 'application/javascript; charset=utf-8'
    '.json' = 'application/json; charset=utf-8'
    '.svg'  = 'image/svg+xml'
    '.ico'  = 'image/x-icon'
    '.png'  = 'image/png'
    '.jpg'  = 'image/jpeg'
    '.jpeg' = 'image/jpeg'
    '.gif'  = 'image/gif'
    '.woff' = 'font/woff'
    '.woff2'= 'font/woff2'
    '.ttf'  = 'font/ttf'
    '.map'  = 'application/json'
    '.txt'  = 'text/plain; charset=utf-8'
    '.md'   = 'text/plain; charset=utf-8'
  }

  $listener = [System.Net.HttpListener]::new()
  $listener.Prefixes.Add($prefix)
  try {
    $listener.Start()
  } catch {
    throw "Khong mo duoc port $ListenPort. Thu: .\start.ps1 -Port $($ListenPort + 1)"
  }

  Write-Info $Banner
  Write-Info "Nhan Ctrl+C de dung."
  Start-Process $prefix

  while ($listener.IsListening) {
    $ctx = $listener.GetContext()
    $reqPath = [Uri]::UnescapeDataString($ctx.Request.Url.LocalPath.TrimStart('/'))
    if ([string]::IsNullOrWhiteSpace($reqPath) -or $reqPath -eq 'index.html') {
      $reqPath = $DefaultFile
    }

    $full = [System.IO.Path]::GetFullPath((Join-Path $docRoot $reqPath))
    if (-not $full.StartsWith($docRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
      $ctx.Response.StatusCode = 403
      $ctx.Response.Close()
      continue
    }

    if (-not (Test-Path -LiteralPath $full -PathType Leaf) -and $Spa) {
      $full = Join-Path $docRoot $DefaultFile
    }

    if (-not (Test-Path -LiteralPath $full -PathType Leaf)) {
      $ctx.Response.StatusCode = 404
      $bytes = [Text.Encoding]::UTF8.GetBytes("Not found: $reqPath")
      $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
      $ctx.Response.Close()
      continue
    }

    $ext = [IO.Path]::GetExtension($full).ToLowerInvariant()
    $ctx.Response.ContentType = $(if ($mime.ContainsKey($ext)) { $mime[$ext] } else { 'application/octet-stream' })
    $bytes = [IO.File]::ReadAllBytes($full)
    $ctx.Response.ContentLength64 = $bytes.Length
    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    $ctx.Response.Close()
  }
}

function Start-ReactStatic([int]$ListenPort) {
  $dist = Join-Path $Root 'dist'
  if (-not (Test-Path -LiteralPath (Join-Path $dist 'index.html'))) {
    return $false
  }
  Start-FileServer -DocRoot $dist -ListenPort $ListenPort -DefaultFile 'index.html' -Spa `
    -Banner "React (ban build tinh) : http://localhost:$ListenPort/"
  return $true
}

function Start-PrototypeStatic([int]$ListenPort) {
  Start-FileServer -DocRoot $Root -ListenPort $ListenPort -DefaultFile 'prototype.html' `
    -Banner "Prototype tinh: http://localhost:$ListenPort/prototype.html"
}

$distIndex = Join-Path $Root 'dist\index.html'
$wantReact = $Mode -eq 'react' -or $Mode -eq 'auto'
$wantStaticOnly = $Mode -eq 'static'

if ($wantStaticOnly) {
  $p = $(if ($Port -gt 0) { $Port } else { 8080 })
  Start-PrototypeStatic $p
  return
}

if ($wantReact) {
  $nodeHome = Resolve-NodeHome
  if ($nodeHome) {
    $p = $(if ($Port -gt 0) { $Port } else { 5173 })
    Start-Vite $nodeHome $p
    return
  }

  $p = $(if ($Port -gt 0) { $Port } else { 8080 })
  if (Test-Path -LiteralPath $distIndex) {
    Write-Info "Khong co Node. Phuc vu React tu dist/ bang PowerShell."
    Start-ReactStatic $p | Out-Null
    return
  }

  Write-Info "Khong co Node va chua co dist/. Tam thoi chay Prototype tinh."
  Write-Info "Khi co mang, chay lai .\start.ps1 de tai Node portable va mo React."
  Start-PrototypeStatic $p
}
