const CospaceMenu = (props) => {

    const chat_button_class_name = props.chat_button_class_name;
    const task_button_class_name = props.task_button_class_name;
    const file_button_class_name = props.file_button_class_name;
    const coactor_button_class_name = props.coactor_button_class_name;

    var chat_png_src = "images/Facebook Messenger.png";
    var task_png_src = "images/Task.png";
    var file_png_src = "images/Document.png";
    var coactor_png_src = "images/Leadership.png";

    if (chat_button_class_name === "selected"){
        chat_png_src = "images/Facebook Messenger white.png";
    }
    else if (task_button_class_name === "selected"){
        task_png_src = "images/Task white.png";
    }
    else if (file_button_class_name === "selected"){
        file_png_src = "images/Document white.png";
    }
    else{
        coactor_png_src = "images/Leadership white.png";
    }

    return (
        <div className="cospacemenu">
            <h1>Co-Space Name</h1>
            <ul>
                <button className = {chat_button_class_name}>
                    <li>
                        <img src = {chat_png_src} alt="Chat" />
                        <p>Chat</p>
                    </li>
                </button>
                <button className = {task_button_class_name}>
                    <li>
                        <img src = {task_png_src} alt="Tasks" />
                        <p>Tasks</p>
                    </li>
                </button>
                <button className = {file_button_class_name}>
                    <li>
                        <img src = {file_png_src} alt="Files" />
                        <p>Files</p>
                    </li>
                </button>
                <button className = {coactor_button_class_name}>
                    <li>
                        <img src = {coactor_png_src} alt="Co-Actors" />
                        <p>Co-Actors</p>
                    </li>
                </button>
            </ul>
        </div>
    );
}
 
export default CospaceMenu;