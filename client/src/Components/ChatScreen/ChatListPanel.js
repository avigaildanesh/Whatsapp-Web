import React from 'react';
import UserItem from '../../Pages/Chat/UserItem';

function ChatListPanel({ chatList, handleContactSwitch }) {
  
  const renderChatList = () => {
    if (chatList.length === 0) {
      return <div className="noFriends">Add new people</div>;
    }

    return chatList.map((contact) => (
      <UserItem
        key={contact.id}
        func={handleContactSwitch}
        contact={contact}
      />
    ));
  };

  return <div className="chatlist">{renderChatList()}</div>;
}

export default ChatListPanel;


