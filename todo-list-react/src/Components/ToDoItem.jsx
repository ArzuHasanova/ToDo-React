import './CSS/ToDo.css';
import {useDispatch} from "react-redux";


const ToDoItem = props => {

    const dispatch = useDispatch();

    const changeState = task => {

        if (task.state === 'completed') {
            dispatch({
                type: "UNCOMPLETED_TASK",
                payload: {
                    text: task.text,
                    state: "not_completed"
                }
            });
        } else {
            dispatch({
                type: "COMPLETE_TASK",
                payload: {
                    text: task.text,
                    state: "completed"
                }
            });
        }
    }

    return (
        <div className={"col-12 d-flex justify-content-center m-0"}>
            <input checked = {props.completed} onChange={() => changeState(props.children)} className={"ms-3"} type={"checkbox"} />
            <div className={`p-3 todo-item`} id={props.completed ? "completed-item" : null}>{props.children.text}</div>
        </div>
    )
}

export default ToDoItem;