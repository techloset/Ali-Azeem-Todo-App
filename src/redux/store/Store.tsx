import {configureStore, Action} from '@reduxjs/toolkit';
import firestoreReducer from '../slice/firestoreSlice';
import {ThunkAction} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    firestore: firestoreReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
