import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer/addTodo";

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
})