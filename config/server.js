const http = require("http");
const router = require("./routes");
const knex = require("../db/dbConfig");
const port = process.env.PORT || 3000;

// Instanciate the server with the request handler that is defined above and starts to listen on port defined by port variable
const server = http.createServer(router);

server.listen(port, err => {
  if (err) {
    return console.err("Something went wrong => ", err);
  }

  console.log(`server listening on port ${port}`);
});
