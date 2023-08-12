const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
    const myUrl = url.parse(req.url, true);
    if(myUrl.pathname === '/favicon.ico')
        res.end();
    
  const log = `${Date.now()} : ${req.url} new Request Recieved\n`;
  fs.appendFile("./log.txt", log, (err) => {
    if (err) console.log(err);
  });
  
  switch (myUrl.pathname) {
    case "/":
      res.end("you are at Main page");
      break;
    case "/about":
      const username = myUrl.query.myname;
      res.end("You are at about page " + username);
      break;
    case "/search":
      const search = myUrl.query.search_query;
      res.end("here are the results for " + search);
      break;
    default:
      res.end("invailid request ! ");
      break;
  }
});

server.listen(3000, () => {
  console.log("server started!");
});
