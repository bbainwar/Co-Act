const Sidemenu = () => {
    return (
        <div className="sidemenu">
            <ul>
                <button>
                    <li>
                        <img src="images/People.png" alt="Co-Spaces" />
                        <p>Co-Spaces</p>
                    </li>
                </button>
                <button>
                    <li>
                        <img src="images/Planner.png" alt="Calendar" />
                        <p>Calendar</p>
                    </li>
                </button>
                <button>
                    <li>
                        <img src="images/Todo List.png" alt="ToDo List" />
                        <p>ToDo List</p>
                    </li>
                </button>
            </ul>
        </div>
    );
}
 
export default Sidemenu;