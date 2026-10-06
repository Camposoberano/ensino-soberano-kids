@echo off
title Ensino Soberano Kids - Gerador de Atividades
echo ========================================================
echo   Iniciando Ensino Soberano Kids (Simbiose Jev + Gemini)...
echo ========================================================

where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Iniciando Servidor Hibrido na porta 8085...
    start /B python server.py >nul 2>nul
    timeout /t 1 >nul
    start "" "http://localhost:8085"
) else (
    echo Abrindo aplicacao diretamente no navegador...
    start "" "%~dp0index.html"
)
exit
