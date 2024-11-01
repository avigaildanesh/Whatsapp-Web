import './message.css'

export const Message = (props) => {
    return (
        <div className='message_container'>
            <div className="block">
                <span className='content'>{props.content} </span>
                <span className='time'>{props.time}</span>
            </div>
        </div>

    );

}