import React from 'react';
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

function ChatInput({ handleSetMessage }) {
  const [chatInput, setChatInput] = useState('');
  const [messageReceived, setMessageReceived] = useState("");


  const handleSendMessage = () => {
    if (chatInput.trim() !== '') {
      handleSetMessage(chatInput);
      setChatInput('');
      sendMessage();
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { chatInput });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.chatInput);
    });
  }, [socket]);

  return (
    <div className="chat_input">
      <button className="sendbtn" onClick={handleSendMessage}>
        Send
      </button>
      <input
        type="text"
        placeholder="message..."
        className="input_msg"
        value={chatInput}
        onChange={(e) => setChatInput(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
}

export default ChatInput;
