// import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// import {RootState} from '../store/Store';

// export interface Todo {
//   Title: string;
//   Note: string;
//   Tags: string;
// }

// const initialState: Array<Todo> = [];

// const TodoSlice = createSlice({
//   name: 'Todo',
//   initialState,
//   reducers: {
//     addTodo: (state, action: PayloadAction<Todo>) => {
//       state.push(action.payload);
//     },
//     deleteTodo: (state, action: PayloadAction<number>) => {
//       state.splice(action.payload, 1);
//     },
//   },
// });

// export const {addTodo} = TodoSlice.actions;
// export const TodoSelector = (state: RootState) => state.Todo;
// export default TodoSlice.reducer;

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store/Store';

export interface Todo {
  Title: string;
  Note: string;
  Tags: string;
}

const initialState: Array<Todo> = [];

const TodoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
    clearTodo: state => {
      state.splice(0, state.length); // Clear the todo list array
    },
  },
});

export const {addTodo, deleteTodo, clearTodo} = TodoSlice.actions;
export const TodoSelector = (state: RootState) => state.Todo;
export default TodoSlice.reducer;
