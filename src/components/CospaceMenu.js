const CospaceMenu = () => {
    return (
        <div className="cospacemenu">
            <h1>Co-Space Name</h1>
            <ul>
                <button>
                    <li>
                        <img src="images/Facebook Messenger.png" alt="Chat" />
                        <p>Chat</p>
                    </li>
                </button>
                <button>
                    <li>
                        <img src="images/Task.png" alt="Tasks" />
                        <p>Tasks</p>
                    </li>
                </button>
                <button>
                    <li>
                        <img src="images/Document.png" alt="Files" />
                        <p>Files</p>
                    </li>
                </button>
                <button>
                    <li>
                        <img src="images/Leadership.png" alt="Co-Actors" />
                        <p>Co-Actors</p>
                    </li>
                </button>
            </ul>
        </div>
    );
}
 
export default CospaceMenu;