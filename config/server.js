const http = require('http');
const fs = require('fs');
const path = require('path');
const API = require('./API.js')

const port = 3000


const requestHandler = (request, response) => {
	console.log(request.url);
	// defines file path to serve from request
	let file = `.${request.url}`;
	// extracts the file extension
	const extension = `${path.extname(file).toLowerCase()}`;
	// define in an object all the acceptable file extensions to serve
	const mime = {
		'.html': 'text/html',
		'.js': 'text/javascript',
		'.css': 'text/css',
		'.json': 'application/json',
		'.png': 'image/png',
		'.jpg': 'image/jpg',
		'.gif': 'image/gif',
	};
	// if mime request doesn't exist, defaults to octet, which means 'arbitrary binary data stream' and it will force download in the browser
	const type = mime[extension] || 'text/html'

	//defaults root path to index.html
	if (file == './') {
		file = './index.html';
	};
	// Intercepts request and checks if its an API call
	if (API.catchAPIrequest(request.url)) {
		response.end(API.exec(), 'utf-8')
	} else {
		fs.readFile(file, (error, content) => {
			// If it can;t if the html page to serve, it will throw a 404
			if (error) {
				if (error.code == 'ENOENT') {
					fs.readFile('./config/404.html', (error, content) => {
						if (error) {
							console.error('Something is missing: ', error)
						}
						response.writeHead(200, { 'Content-Type': type });
						response.end(content, 'utf-8')
					})
				} else {
					// If something else than missing page, throws a 500 error
					response.writeHead(500);
					response.end(`Error: ${error}`);
				};
			} else {
				// Serves any page that isn't directed to the API controller
				response.writeHead(200, { 'Content-Type': type });
				response.end(content, 'utf-8');
			}
		})
	};
};
// Instanciate the server with the request handler that is defined above and starts to listen on port defined by port variable
const server = http.createServer(requestHandler);

server.listen(port, err => {
	if (err) {
		return console.err('Something went wrong => ', err);
	};

	console.log(`server listening on port ${port}`);
}
);




