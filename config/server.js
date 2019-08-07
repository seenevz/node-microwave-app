const http = require("http");
const router = require("./routes");
const knex = require("../db/dbConfig");
const port = process.env.PORT || 3000;
const userTest = require("../app/models/user");

// Instanciate the server with the request handler that is defined above and starts to listen on port defined by port variable
const server = http.createServer(router);

server
  .listen(port, err => {
    console.log(`server listening on port ${port}`);
  })
  .on("error", err => console.error("Oops, something went wrong! => ", err));
