import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:5000");

function App() {
  //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);
  return (
    <div className="App">
      <input
        placeholder="Room Number..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}> Join Room</button>
      <input
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}> Send Message</button>
      <h1> Message:</h1>
      {messageReceived}
    </div>
  );
}



//setup sockets 
useEffect(() => {
  function sendUsername() {
    console.log("sent username", myUsername);
    socket.emit("username", {
      username: myUsername
    });
  }

  socket.connect();

  socket.on("connect", sendUsername);
  socket.on("newMessage", updateChats);
  socket.on("newChat", updateChats);

  return () => {
    socket.off("connect", sendUsername);
    socket.off("newMessage", updateChats);
    socket.off("newChat", updateChats);
    socket.disconnect();
  };
}, []);


export default App;