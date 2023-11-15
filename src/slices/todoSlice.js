import { createSlice } from "@reduxjs/toolkit";

//create a function that can save the todo list in the local storage
const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem("todoList");
  if (localTodoList) {
    //change it to array
    return JSON.parse(localTodoList);
  } else {
    window.localStorage.setItem("todoList", JSON.stringify([]));
    return [];
  }
};

//define the initial value
const initialValue = {
  filterStatus: "all",
  todoList: getInitialTodo(),
};
//create a slice called todoSlice
export const todoSlice = createSlice({
  name: "todo",
  initialState: initialValue,
  reducers: {
    clearAll: (state) => {
      state.todoList = [];
      window.localStorage.setItem("todoList", JSON.stringify([]));
    },
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArray = JSON.parse(todoList);
        todoListArray.push({ ...action.payload });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArray));
      } else {
        window.localStorage.setItem(
          "todoList",
          JSON.stringify([{ ...action.payload }])
        );
      }
    },
    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArray = JSON.parse(todoList);
        todoListArray.forEach((todo, index) => {
          if (todo.id === action.payload) {
            todoListArray.splice(index, 1);
          }
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArray));
        state.todoList = todoListArray;
      }
    },
    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem("todoList");
      if (todoList) {
        const todoListArray = JSON.parse(todoList);
        todoListArray.forEach((todo, index) => {
          if (todo.id === action.payload.id) {
            todo.status = action.payload.status;
            todo.title = action.payload.title;
          }
        });
        window.localStorage.setItem("todoList", JSON.stringify(todoListArray));
        state.todoList = todoListArray;
      }
    },

    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, updateFilterStatus, clearAll } =
  todoSlice.actions;
//we import it in store function as todo reducer
export default todoSlice.reducer;
