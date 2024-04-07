// import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';
// import firestoreReducer from '../reducer/Reducer';

// const store = createStore(firestoreReducer, applyMiddleware(thunk));

// export default store;

import {configureStore} from '@reduxjs/toolkit';
import firestoreReducer from '../../redux/slice/firestoreSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const store = configureStore({
  reducer: {
    firestore: firestoreReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
