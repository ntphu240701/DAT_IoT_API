const express = require("express");
const cors = require("cors");

const auth = require("./route/auth");
const data = require("./route/data");

const app = express();
const server = require("http").createServer(app);

server.listen(process.env.PORT || 3001);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: [
      "http://192.168.68.10:3000",
      "http://192.168.68.6:3000",
      "http://192.168.68.13:3000"
    ],
  })
);

app.use("/auth", auth);
app.use("/data", data);
