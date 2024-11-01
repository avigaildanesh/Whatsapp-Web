function UserItem(props) {
  const contact = props.contact;
  const user = contact.user;

  const lastMessage =contact.lastMessage;

  const handleClick = () => {
    props.func(contact.id , user.username);
  };

  return (
    <div className="block active" onClick={handleClick}>
      <div className="imgBox">
        <img src={user.profilePic} alt="" className="cover" />
      </div>
      <div className="details">
        <div className="listHead">
          <h4>{user.displayName}</h4>
          <p className="date">{lastMessage?.created}</p>
        </div>
        <div className="message_p">
          <p>{lastMessage?.content}</p>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
