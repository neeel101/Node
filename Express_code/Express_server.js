const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("you are on the '/' path");
});
app.get("/about", (req, res) => {
  res.send("you are on the '/about' path" + req.query.name + req.query.age);
});
app.listen(8000, () => console.log("Server is running"));

// express simplifies the process of making http server , although we cAN MAKE HTT server without express but that will be a cumbersome approach and will be a bad code where will manually need to handle all the cases with a switch case . Also url, and other packages are inbuilt with express which further eliminates the need of installing various packages.