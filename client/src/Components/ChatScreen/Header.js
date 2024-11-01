function Header({ myUser, handleLogOut }) {
  return (
    <div className="header">
      <div className="userimg">
        <img src={myUser.profilePic} alt="user img" className="cover"></img>
      </div>
      <div className="username">{myUser.displayName}</div>
      <ul className="icons">
        <li>
          <button
            type="button"
            className="btn btn-primary myfile"
            data-toggle="modal"
            data-target="#addModal"
          ><ion-icon name="person-add-outline"></ion-icon>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Header;