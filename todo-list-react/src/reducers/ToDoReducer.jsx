const initialState = {
    completed: [],
    pending: []
}

const ToDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "COMPLETE_TASK":
            return {
                ...state,
                completed: [...state.completed, action.payload],
                pending: state.pending.filter(task => task.text !== action.payload.text)
            }
        case "UNCOMPLETED_TASK":
            return {
                ...state,
                pending: [...state.pending, action.payload],
                completed: state.completed.filter(task => task.text !== action.payload.text)
            }
        case "ADD_TASK":
            if(action.payload.text.trim() !== "") {
                return {
                    ...state,
                    pending: [...state.pending, action.payload]
                }
            }
            return state;
        default:
            return state;
    }
}

export default ToDoReducer;