const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

let counts = {
    online: 0,
    busy: 0,
    offline: 0
};

io.on("connection", (socket) => {

    console.log("A user connected");

    socket.emit("statusUpdate", counts);

    socket.on("updateStatus", (status) => {

        if (status === "online") counts.online++;
        if (status === "busy") counts.busy++;
        if (status === "offline") counts.offline++;

        io.emit("statusUpdate", counts);
    });

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});