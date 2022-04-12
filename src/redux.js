import { configureStore, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const todoSlice = createSlice({
    name:  "todo",
    initialState: [
        { id: 1, text: "Faire les courses", done: false},
        { id: 2, text: "Ménage !", done: false},
      ],
      reducers: {
          addTask: (state, action) => {
            // action {type: "todo/addTask", payload: "this is my first task!" }
              const new_task = {
                id: Date.now(),
                text:  action.payload,
                done: false
              }
              state.push( new_task );
          },

          toggleTask: (state, action) => {
           // action {type: "todo/toggleTask", payload: 7{id} }
              const task = state.find( t => t.id == action.payload )
              task.done = ! task.done;
          },

          deleteTask: (state, action) => {
         // action {type: "todo/deleteTask", payload: 17{id} }
                state = state.filter( t  => t.id !== action.payload );
                return state
          }
      }
    });


    export  const {addTask, deleteTask, toggleTask } = todoSlice.actions;
    export const store = configureStore({
        reducer:{
              todo: todoSlice.reducer
        }
    })

  
    