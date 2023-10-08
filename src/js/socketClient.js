const socket = io.connect('/');
socket.on('message', data => {
  console.log(data);
});
