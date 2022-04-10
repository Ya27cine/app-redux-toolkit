import { configureStore, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const todoSlice = createSlice({
    name:  "todo",
    initialState: [
        { id: 1, text: "Faire les courses", done: false, date: dateTody() },
        { id: 2, text: "Ménage !", done: false, date: dateTody() },
      ],
      reducers: {
          addTask: (state, action) => {
            // action {type: "todo/addTaskpayload: "this is my first task!" }
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
                state = this.state.filter( t  => t.id != action.payload );
          }
      }
    });




    export const store = configureStore({
        reducer:{
              todo: todoSlice,
        }
    })
    