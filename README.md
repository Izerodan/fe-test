# Mythological Gods

## Description

Simple web project designed to display a set of elements (mythological gods, in this case) in a master-detail pattern interface. 

The project is developed using the following JavaScript frameworks:
  * [Angular Framework](https://angular.io/): for the client application
  * [ExpressJS](https://nodejs.org/en/) - [NodeJS](http://expressjs.com/): for the RESTful server application

#### Data storage

Currently, the data obtained by the server must be stored in either .json or .csv files placed at the root of the server folder. 
The type of file used is defined by the *config.file.extension* property.

#### Configuration

The server has a *config.js* file at its root, which contains the following configurable properties:
* *config.port*: The port from which the application listening (the client application currently attempts to establish a 
  communication with the server at the port 4000)
* *config.environment*: The environment where the application is executed    
* *config.cacheTimeout*: The duration of the data cached in milliseconds
* *config.persistence*: The persistence system - Only 'file' is currently implemented
* *config.file.extension*: The extension of the storage files when *config.persistence* is set to 'file'. Only 'json' and 'csv'
  are currently implemented
* *config.file.encoding*: The encoding used for the storage files when *config.persistence* is set to 'file'
* *config.file.delimiter*: The delimiter used when the *config.file.extension* is set to 'csv'

#### API

The server has the following HTTP GET methods:
* /god: Returns all the gods stored in the current persistence layer.
* /god/$id$: Returns the god with id $id$ from the persistence layer.

Those are the methods accessed by the client's GodService component to obtain the data to show.


## Build and Execution

To build and serve both applications, there is an executable *start* script placed at the root of the project.

Executing the *start* script does the following:
  1. Checks if there is a node_modules folder inside each one of the projects.
  2. If any of them does not have the folder, executes npm install inside it.
  3. Concurrently starts the server and the client applications. This also opens the client url with the system's default browser.
  
Executing the start script with the *force* (/f or -f) parameter forces the step 2.
  
The client application has two deployment scripts inside the packages.json file:
  * **npm start**: serves the application for continuous development with the webpack-dev-server. The building of 
  the files is done in memory. This is the mode executed by the *start* script.
  * **npm built**: generates the bundles required for the application to work in a production environment inside 
  the *dist/* folder.
  
  ## Pending
  
  With more time, the project could have become better by, for instance:
  * Have the server write informative logs to a file/the database.
  * Handling the server initialization errors.
  * Implementing a better client handling of the failure responses sent by the server.
  * Adding the frontend unit and component tests.
  * Creating an automated suite to imitate some users' behavior.
  * Using a better deployment system (i.e. Jenkins).
  * Using a database engine to store the information and a DAO to access it.
  * Isolating the server and the client routes as they increase in number.
  * Improving the view.
  * ...