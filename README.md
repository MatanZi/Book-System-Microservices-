# Book Microservice System

An microservice system demonstrating simple microservices API implementation with NodeJs, Express and MongoDb and fastMQ


<b> Book service: </b>
The `api` uri preceed all API endpoints and the following endpoints are currently available
* GET `/api/books`
* POST `/api/books`
* GET `/api/books/:isbn`
* PUT `/api/books/:isbn`
* PATCH `/api/books/:isbn`
* DELETE `/api/books/:isbn`


<b> Book analysis service: </b>
The `api` uri preceed all API endpoints and the following endpoints are currently available
* GET `/api/book_analytics`

Requirements
===============
*  npm 
*  visual studio code
*  Node


Notes
===============
*  might need to run the following commands:
<b> Book Service:</b>
*  `npm install axios`
*  `npm install express`
*  `npm install mongoose`
*  `npm install body-parser`
*  `npm install fastmq`
*  `npm install assert`

<b> Book Analysis Service</b>
*  `npm install body-parser`
*  `npm install fastmq`
*  `npm install express`

How To Start
===============
*  first open folder Analytics service in vscode  ---> run the command `npm install` --->  run the command `node ./index.js`.
*  second open Book service folder in vscode  ---> run the command `npm install` ---> run the command `node ./index.js`.

*  for testing : on the book service project run the command `npm run test`



Tech Stack
===============
* fastMQ  - message broker
* express - api communication
* NodeJs
* MongoDB
* Microservice architecture
