:: This script installs the npm dependencies required for the client and the server to work in case the node_modules
:: folder does not exist. After that, executes both applications.
:: The installation of the dependencies can also be forced by passing the /f argument.
@echo off
:: Checking the presence of npm
call npm -v
if errorlevel 1 (
    echo ERROR: 'npm' must be installed to run this script.
    goto end
)
cd server
echo Checking server dependencies...
:: If the node_modules folder does not exist or the /f parameter was passed, install the server dependencies
if exist node_modules if not "%1"=="/f" goto server-installed
    echo Installing server dependencies...
    call npm install
:server-installed
:: Change to client directory
cd ..\client
echo Checking client dependencies...
:: If the node_modules folder does not exist or the /f parameter was passed, install the client dependencies
if exist node_modules if not "%1"=="/f" goto client-installed
    echo Installing client dependencies...
    call npm install
:client-installed
cd ..
:: Start both applications
echo Starting server...
cd server
START npm start
echo Starting client...
cd ../client
START npm start
:: Return to root directory
cd ..
:end