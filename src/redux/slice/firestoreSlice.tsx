import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppThunk} from '../store/Store';
import firestore from '@react-native-firebase/firestore';

interface TaskData {
  id: string;
  title: string;
  note: string;
  tags: string[];
}

interface FirestoreState {
  data: TaskData[];
  loading: boolean;
  error: any;
}

const initialState: FirestoreState = {
  data: [],
  loading: false,
  error: null,
};

const firestoreSlice = createSlice({
  name: 'firestore',
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action: PayloadAction<TaskData[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    deleteDataSuccess(state, action: PayloadAction<string>) {
      state.loading = false;
      state.data = state.data.filter(item => item.id !== action.payload);
    },
    deleteDataFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  deleteDataStart,
  deleteDataSuccess,
  deleteDataFailure,
} = firestoreSlice.actions;

export const fetchDataFromFirestore = (): AppThunk => async dispatch => {
  try {
    dispatch(fetchDataStart());
    const querySnapshot = await firestore().collection('tasks').get();
    const data: TaskData[] = querySnapshot.docs.map(doc => ({
      id: doc.id,
      title: doc.data().title,
      note: doc.data().note,
      tags: doc.data().tags,
      datetime: doc.data().datetime,
    })) as TaskData[];
    dispatch(fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataFailure(error));
  }
};

export const deleteDataFromFirestore =
  (id: string): AppThunk =>
  async dispatch => {
    try {
      dispatch(deleteDataStart());
      await firestore().collection('tasks').doc(id).delete();
      dispatch(deleteDataSuccess(id));
    } catch (error) {
      dispatch(deleteDataFailure(error));
    }
  };

export default firestoreSlice.reducer;
