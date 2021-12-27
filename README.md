# Book Microservice System

An microservice system demonstrating simple API implementation with NodeJs, Express and MongoDb and fastMQ


<b> Book service: </b>
The `api` uri preceed all API endpoints and the following endpoints are currently available
* GET `/api/contacts`
* POST `/api/contacts`
* GET `/api/contacts/:isbn`
* PUT `/api/contacts/:isbn`
* PATCH `/api/contacts/:isbn`
* DELETE `/api/contacts/:isbn`


<b> Book analysis service: </b>
The `api` uri preceed all API endpoints and the following endpoints are currently available
* GET `/api/book_analytics`

How To Start
===============
first open folder Analytics service in vscode  ---> run the command `npm install` --->  run the command `node ./index.js`.
second open Book service folder in vscode  ---> run the command `npm install` ---> run the command `node ./index.js`.

for testing : on the book service project run the command `npm run test`
