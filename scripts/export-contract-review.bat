@echo off
python "%~dp0export_contract_review.py"
if errorlevel 1 exit /b 1
echo.
echo Mo file: export\contract-review\index.html
echo ZIP:     export\contract-review.zip
