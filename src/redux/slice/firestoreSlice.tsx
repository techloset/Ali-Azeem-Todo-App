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
  },
});

export const {fetchDataStart, fetchDataSuccess, fetchDataFailure} =
  firestoreSlice.actions;

export const fetchDataFromFirestore = (): AppThunk => async dispatch => {
  try {
    dispatch(fetchDataStart());
    const querySnapshot = await firestore().collection('tasks').get();
    const data: TaskData[] = querySnapshot.docs.map(doc => ({
      id: doc.id,
      title: doc.data().title,
      note: doc.data().note,
      tags: doc.data().tags,
    })) as TaskData[];
    dispatch(fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataFailure(error));
  }
};

export default firestoreSlice.reducer;
