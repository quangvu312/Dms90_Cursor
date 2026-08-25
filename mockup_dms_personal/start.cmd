@echo off
setlocal
cd /d "%~dp0"

REM DMS90 mockup — port 5174 (Ecom thuong chay 5173)
set "DMS90_PORT=5174"

if exist "%ProgramFiles%\nodejs\node.exe" (
  set "PATH=%ProgramFiles%\nodejs;%PATH%"
)

where node >nul 2>&1
if errorlevel 1 (
  echo [INFO] Khong thay Node tren PATH, thu start.ps1 ^(co the tai Node portable^)...
  powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0start.ps1" -Mode react -Port %DMS90_PORT%
  exit /b %ERRORLEVEL%
)

if not exist "node_modules\" (
  echo Installing dependencies...
  call npm.cmd install --no-fund --no-audit
  if errorlevel 1 exit /b 1
)

echo Starting DMS90 mockup at http://localhost:%DMS90_PORT%/
start "" "http://localhost:%DMS90_PORT%/"
call npm.cmd run dev -- --host localhost --port %DMS90_PORT% --strictPort
