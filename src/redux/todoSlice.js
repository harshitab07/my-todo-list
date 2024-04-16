import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// get data from localhost
export const getTodoAsync = createAsyncThunk('todo/getTodoAsync', () => {
    let todoList = [];
    const data = localStorage.getItem("todoList");
    if (data) {
        todoList = JSON.parse(data);
    }
    return todoList;
});

// add todo in localhost
export const addTodoAsync = createAsyncThunk('todo/addTodoAsync', (payload) => {
    let todoList = [];
    const data = localStorage.getItem("todoList");
    if (data) {
        todoList = JSON.parse(data);
        todoList = [...todoList, payload];
    }

    localStorage.setItem(JSON.stringify(todoList));

    return todoList;
});

// delete todo from localhost
export const deleteTodoAsync = createAsyncThunk('todo/deleteTodoAsync', (payload) => {
    let todoList = [];
    const data = localStorage.getItem("todoList");
    if (data) {
        todoList = JSON.parse(data);
    }

    const indexOf = todoList.indexOf((todo) => todo.id === payload.id);
    const newTodoList = todoList.splice(indexOf, 1);
    
    localStorage.setItem(JSON.stringify(newTodoList));

    return newTodoList;
});

const todoSlice = createSlice({
    name: "todo",
    initialState:[],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                complete: false
            }

            state.push(newTodo);
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
    },
    extraReducers: builder => {
        builder.addCase(getTodoAsync.fulfilled, (state, action) => {
            return action.payload.todos;
        })
        builder.addCase(addTodoAsync.fulfilled, (state, action) => {
            state.push(action.payload.todos);
        })
        builder.addCase(deleteTodoAsync.fulfilled, (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        })
    }
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;