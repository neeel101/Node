const express = require("express");
const {logReqRes} = require("./middlewares/")
const { connectMongoDB } = require("./connection.js");
const userRouter = require("./routes/user");

const PORT = 5000;
const app = express();

//connection
connectMongoDB("mongodb://127.0.0.1:27017/youtube").then(() => console.log("MONGO DB Connected"));

//middlewares
app.use(logReqRes("log.txt"))


app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRouter);

app.listen(PORT, () => console.log("server is Started at port", PORT));
