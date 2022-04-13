import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ToDoNotes from "./todonotes";

const ToDo = props => {
    const inpRef = useRef();

    const todo = useSelector(store => store.todo);
    const dispatch = useDispatch();

    const [activePage, setActivePage] = useState("pending");

    const show = state => {
        if (state === "completed") {
            if (todo.completed.length === 0) {
                return <p>No completed tasks</p>
            }
            return todo.completed.map((item, idx) => <ToDoItem completed={true} key={idx}>{item}</ToDoItem>);
        } else if (state === "pending") {
            if (todo.pending.length === 0) {
                return <p>No pending tasks</p>
            }
            return todo.pending.map((item, idx) => <ToDoItem completed={false} key={idx}>{item}</ToDoItem>);
        } else {
            return <p>No tasks</p>
        }
    }

    return (
        <div>
            <form className={""} onSubmit={(e) => {
                e.preventDefault();
                dispatch({
                    type: "ADD_TASK",
                    payload: {text: inpRef.current.value, state: "not_completed"}
                });
                inpRef.current.value = "";
            }}>
                <div className={"d-flex justify-content-center mt-5"}><input className={"form-control w-50 px-2 py-3"} ref={inpRef} type="text" placeholder="Add new todo"/></div>
            </form>

            <div className="todo-list">
                <div className="todo-list-header">
                    <button id={activePage === "pending" ? "active" : null} className={"btn btn-primary mt-3"} onClick={() => setActivePage("pending")}>Pending</button>
                    <button id={activePage === "completed" ? "active" : null} className={"btn btn-primary ms-3 mt-3"}
                            onClick={() => setActivePage("completed")}>Completed
                    </button>
                </div>
                <div className="todo-list-body mt-3">
                    {activePage === "completed" ? show("completed") : show("pending")}
                </div>
            </div>
        </div>
    );
}

export default ToDo;