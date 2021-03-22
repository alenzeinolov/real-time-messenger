import http from "http";
import WebSocket from "ws";

const server = http.createServer();

const wss = new WebSocket.Server({
  server,
});

wss.on("connection", (ws) => {
  ws.send("Connected to server. Welcome!");
  ws.on("message", (msg) => {
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(`[${new Date().toLocaleString()}] ${msg}`);
      }
    });
  });
});

wss.on("close", () => {
  console.log("Client disconnected.");
});

server.listen(5000, () => {
  console.log("Listening at http://localhost:5000");
});
