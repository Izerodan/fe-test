#!/bin/bash
# This script installs the npm dependencies required for the client and the server to work in case the node_modules
# folder does not exist. After that, executes both applications.
# The installation of the dependencies can also be forced by passing the /f argument.
# Checking the presence of npm
npm -v &> /dev/null
if [[ $? -ne 0 ]]; then
	echo 'ERROR: "npm" must be installed to run this script'
	exit 1
fi
cd server
echo 'Checking server dependencies...'
# If the node_modules folder does not exist or the /f parameter was passed, install the server dependencies
if [[ ! -d node_modules || "$1" -eq "-f" ]]; then
	echo 'Installing server dependencies...'
	npm install
fi
# Change to client directory
cd ../client
echo 'Checking client dependencies...'
# If the node_modules folder does not exist or the /f parameter was passed, install the client dependencies
if [[ ! -d node_modules || "$1" -eq "-f" ]]; then
	echo 'Installing client dependencies...'
	npm install
fi
cd ..
# Start both applications
echo 'Starting server...'
cd server
npm start &
cd ../client
echo 'Starting client...'
npm start &
# Return to the root directory
cd ..
exit 0
