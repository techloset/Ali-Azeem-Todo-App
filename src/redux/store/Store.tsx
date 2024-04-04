import {configureStore} from '@reduxjs/toolkit';
import TodoReducer from '../slices/TodoSlice';

export const store = configureStore({
  reducer: {
    Todo: TodoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.dispatch>;
