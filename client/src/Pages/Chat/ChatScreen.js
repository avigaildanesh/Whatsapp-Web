import React, { useState, useEffect } from 'react';
import './ChatScreen.css';
import { useNavigate } from 'react-router-dom';
import { Message } from '../../Components/Message/Message';
import ChatBox from '../../Components/ChatBox/ChatBox';
import AddContactModal from '../../Components/ChatScreen/AddContactModal';
import ChatInput from '../../Components/ChatScreen/ChatInput';
import ChatListPanel from '../../Components/ChatScreen/ChatListPanel';
import Header from '../../Components/ChatScreen/Header';
import { getUser } from './user';
import { getChats, sendMessage, createChat, getMessages, deleteChat } from './getChat';
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

function ChatScreen() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [chatList, setChatList] = useState([]);
  const [myUser, setMyUser] = useState(null);
  const [contact, setContact] = useState(null);

  const handleContactSwitch = async (id) => {
    const messages = await getMessages({ id })
    const contact = chatList.find((contact) => contact.id === id);
    const updatedChatList = [contact, ...chatList.filter((contact) => contact.id !== id)];
    setChatList(updatedChatList);
    setContact(contact);
    messages.reverse();
    setMessages(messages);
  };

  const handleNewContact = async () => {
    const contactNameInput = document.getElementById('name');
    const contactName = contactNameInput.value;
    contactNameInput.value = '';

    if (contactName === myUser.username) {
      return;
    }
    const existUser = chatList.find((contact) => contact.user.username === contactName);
    if (existUser) {
      const updatedChatList = [existUser, ...chatList.filter((contact) => contact.user.username !== contactName)];
      setContact(existUser);
      setChatList(updatedChatList);
    } else {
      const newContact = await createChat({ contactName });
      setContact(newContact);
      setChatList([newContact, ...chatList]);
    }
  };

  const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
  };

  const handleSendMessage = async (message) => {
    const id = contact.id;
    await socket.emit("sendMessage", { username: myUser.username, msg: message, id });
    const messages = await getMessages({ id: contact.id });
    setMessages([...messages]);
    const updatedChatList = await getChats();
    setChatList(updatedChatList);
  };

  useEffect(() => {
    const sendUsername = () => {
      if (myUser && myUser.username) {
        socket.emit("username", {
          username: myUser.username
        });
      }
    };

    socket.connect();
    socket.on("sendMessage", handleSendMessage)
    socket.on("connect", sendUsername);
    socket.on("newMessage", fetchData);
    socket.on("newChat", handleNewContact);

    return () => {
      socket.off("connect", sendUsername);
      socket.off("newMessage",async ()=>{
        fetchData();
      } );
      socket.off("newChat", handleNewContact);
      socket.disconnect();
    };
  }, [myUser]);

  const fetchData = async () => {
    const response = await getUser();
    const chatList = await getChats();
    setChatList(chatList);
    setMyUser(response);
    if(contact){
      const messages=await getMessages({ id: contact.id });
      const reverseMessages=messages.reverse();
      setMessages([...messages]);

    }
  };

  const handleDeleteChat = async () => {
    if (contact) {
      const id = contact.id;
      await deleteChat({ id });
      fetchData();
      setContact(null);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  if (!myUser) {
    return <div> Hemi </div>;
  }

  return (
    <div className="container">
      <button type="button" id="exit-btn" onClick={handleLogOut}>
        Log Out
      </button>
      <div className="ChatScreen">
        <div className="leftSide">
          <Header myUser={myUser} />
          {chatList.length > 0 && (
            <ChatListPanel chatList={chatList} handleContactSwitch={handleContactSwitch} />
          )}
        </div>
        <div className="rightSide">
          {contact ? (
            <>
              <ChatBox contact={contact} func={handleDeleteChat} />

              <div className="chatBox">
                {messages ? (
                  messages.map((message) => (
                    <Message key={message.id} {...message} myUser={myUser} />
                  ))
                ) : (
                  <div></div>
                )}
              </div>
              <ChatInput handleSetMessage={handleSendMessage} />
            </>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <AddContactModal handleNewContact={handleNewContact} />
    </div>
  );
}

export default ChatScreen;
