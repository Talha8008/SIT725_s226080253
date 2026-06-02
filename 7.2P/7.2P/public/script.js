const socket = io();

function sendStatus(status) {
    socket.emit("updateStatus", status);
}

socket.on("statusUpdate", (data) => {

    document.getElementById("online").innerText = data.online;
    document.getElementById("busy").innerText = data.busy;
    document.getElementById("offline").innerText = data.offline;

});