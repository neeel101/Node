const fs = require("fs");
const http = require("http");
const myServer = http.createServer((req, res) => {``
    const log = `${Date.now()}: ${req.url}\n`;
	fs.appendFile("./log.txt", log, (err, data) => {
		if (err) return err;
		return data;
	});
	switch (req.url) {
		case "/":
			res.end("this is the home page");
			break;
		case "/contact":
			console.log('hauua');
			res.end("this is the contact us page");
			break;
		default:
			res.end('invalid path !');
	}
	// res.end("server is running!");
});
myServer.listen(8000, () => console.log("Server Started!"));
