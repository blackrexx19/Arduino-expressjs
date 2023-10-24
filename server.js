const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const { Server } = require("socket.io");
const express = require("express");

const app = express();
const http = require("http");
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});

io.on("connection", (socket) => {
  console.log("Connected....");
  socket.on("disconnect", () => {
    console.log("Disconnected....");
  });
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});

const port = new SerialPort({
  path: "/dev/ttyUSB0",
  baudRate: 9600,
});

// parsing data arduino
const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));

// tangkap data arduini
parser.on("data", (result) => {
  console.log("data dari arduino -> ", result);
  io.emit("data", { data: result });
});

app.post("/arduinoApi", (req, res) => {
  const data = req.body.data;
  port.write(data, (err) => {
    if (err) {
      console.error("data write error:", err);
      res.status(500).json({ error: "data write error" });
    }
    console.log("data send to arduino: ", data);
    res.end();
  });
});
