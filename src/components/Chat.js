const Chat = () => {
    return (
        <div className="chat-window" id="chat-window">
            <div className="chat-head">
                <div>
                    <p>Messages are permanently saved in the database.</p>
                </div>
                <div className="callbtns">
                    <button><img src="/images/Call.png" alt="Call" /></button>
                    <button><img src="/images/Video Call.png" alt="Video Call" /></button>
                </div>
            </div>

            <div className="chat-area" id="chat-area">
                
            </div>

            <div className="send-area">
                <input type="text" placeholder="Enter message" id="msg-data"/>
                <button id="msg-send">Send</button>
            </div>
        </div>
    );
}
 
export default Chat;