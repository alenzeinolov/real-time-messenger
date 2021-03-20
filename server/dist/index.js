"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var ws_1 = __importDefault(require("ws"));
var server = http_1.default.createServer();
var wss = new ws_1.default.Server({
    server: server,
});
wss.on("connection", function (ws) {
    ws.send("Connected to server. Welcome!");
    ws.on("message", function (msg) {
        wss.clients.forEach(function (client) {
            if (client.readyState === ws_1.default.OPEN) {
                client.send("[" + new Date().toLocaleString() + "] " + msg);
            }
        });
    });
});
server.listen(5000, function () {
    console.log("Listening at http://localhost:5000");
});
//# sourceMappingURL=index.js.map