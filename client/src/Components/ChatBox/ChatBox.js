
const ChatBox = (props) => {

    const contact = props.contact;
    
    return (
        <>
            <div className="header">
                <div className="imgText">
                    <div className="userimg">
                        <img src={contact.user.profilePic} alt="" className="cover" />
                    </div>
                    <h4>
                        {contact.user.displayName}<br />
                        <span>online</span>
                    </h4>
                </div>
                <div className="file">
                    <button
                        type="button"
                        className="btn btn-primary myfile"
                        data-toggle="modal"
                        data-target=""
                        onClick={props.func}
                    >
                        <ion-icon name="trash-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </>
    );
};
export default ChatBox;  