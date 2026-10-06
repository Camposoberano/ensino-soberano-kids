@echo off
setlocal
cd /d "%~dp0"
title Ensino Soberano Kids - Gerador de Atividades
echo ========================================================
echo   Iniciando Ensino Soberano Kids (Simbiose Jev + Gemini)...
echo ========================================================

:: 1. Verificar se a porta 8085 ja esta ativa
netstat -ano | findstr :8085 >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Servidor ja esta ativo na porta 8085.
    start "" "http://localhost:8085"
    goto fim
)

:: 2. Se nao estiver ativa, verificar se python esta disponivel
where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Iniciando Servidor Hibrido na porta 8085...
    start "Servidor Ensino Soberano Kids" /MIN python server.py
    timeout /t 2 >nul
    start "" "http://localhost:8085"
) else (
    echo Python nao encontrado. Abrindo aplicacao diretamente no navegador...
    start "" "%~dp0index.html"
)

:fim
exit
