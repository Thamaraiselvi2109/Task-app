import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { StatusProps, task, TaskList } from "../../modal/modal";


const initialState: task = {
    singleTask: [{
        id: nanoid(),
        task: "Wake Up at 9",
        description : "description",
        duedate: new Date(),
        category: 'Work',
        status: 'Todo',
        isDone: false,
        isSelected: false
    },
    {
        id: nanoid(),
        task: "Brush",
        description : "description",
        duedate: new Date(),
        category: 'Work',
        status: 'Todo',
        isDone: false,
        isSelected: false
    },
    {
        id: nanoid(),
        task: "Bath",
        description : "description",
        duedate: new Date(),
        category: 'Work',
        status: 'Todo',
        isDone: false,
        isSelected: false
    },
    {
        id: nanoid(),
        task: "Eat",
        description : "description",
        duedate: new Date(),
        category: 'Work',
        status: 'Todo',
        isDone: false,
        isSelected: false
    },
    {
        id: nanoid(),
        task: "Do Work",
        description : "description",
        duedate: new Date(),
        category: 'Work',
        status: 'Onprogress',
        isDone: false,
        isSelected: false
    }, {
        id: nanoid(),
        task: "Sleep",
        description : "description",
        duedate: new Date(),
        category: 'Work',
        status: 'Completed',
        isDone: true,
        isSelected: false
    }
    ]
}

const TaskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        AddTaskAction: (state, action: PayloadAction<TaskList>) => {
            state.singleTask.push(action.payload);
        },
        RemoveTaskAction: (state, action: PayloadAction<string>) => {
            state.singleTask = state.singleTask.filter((task) => task.id !== action.payload);
        },
        UpdateTaskStatus: (state, action: PayloadAction<{ id: string; status: StatusProps }>) => {
            const taskIndex = state.singleTask.findIndex((task) => task.id === action.payload.id);
            if (taskIndex !== -1) {
                state.singleTask[taskIndex].status = action.payload.status;
            }
        },
    }
})


export default TaskSlice.reducer;
export const {AddTaskAction,RemoveTaskAction,UpdateTaskStatus} = TaskSlice.actions;