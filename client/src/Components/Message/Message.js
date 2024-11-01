import React from 'react';
import './message.css';

export const Message = (props) => {
  let userBlock = 'message_container my_message';

  if (props.myUser.username !== props.sender.username) {
    userBlock = 'message_container friend_message';
  }

  return (
    <div className={userBlock}>
      <div className="block">
        <span className='content'>{props.content}</span>
        <span className='time'>{props.created}</span>
      </div>
    </div>
  );
};

export default Message;
