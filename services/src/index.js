import socketIO from "socket.io";

const PORT = 5000
const io = socketIO(PORT);

io.on('connection', function (socket) {
  console.log("Connection established!");

  socket.on('message', function (data) { 
    console.log("Message received: ", data)
  });
  socket.on('disconnect', function () { });
});

console.log(`Server listening on port ${PORT}...`)