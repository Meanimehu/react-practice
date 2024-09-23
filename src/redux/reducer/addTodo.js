import { createSlice } from "@reduxjs/toolkit";

const addTodoSlice = createSlice({
    name: "todos",
    initialState: {
        count: 0,
        result: {},
    },
    reducers: {
        addTodo: (state, action) => {
            state.count += 1;
        },
        addResult: (state, action) => {
            state.result = action.payload;
        }
    }
})

export const { addTodo, addResult } = addTodoSlice.actions;
export default addTodoSlice.reducer;


export const listProducts = () => async dispatch => {
    try {
      
      const data = await fetch("https://randomuser.me/api/").then(res => res.json());
    
     console.log(data.results[0]);
     dispatch(addResult(data));
  
      
    } catch (error) {
      console.log(error)
    }
  }