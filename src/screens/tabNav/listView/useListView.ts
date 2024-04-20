import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  fetchDataFromFirestore,
  deleteDataFromFirestore,
} from '../../../redux/slice/firestoreSlice';

const useListView = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector(state => state.firestore);

  useEffect(() => {
    dispatch(fetchDataFromFirestore());
  }, [dispatch]);

  const handleNavigateToAddTask = () => {
    navigation.navigate('AddTask');
  };

  const handleDelete = id => {
    dispatch(deleteDataFromFirestore(id));
  };

  return {
    data,
    loading,
    error,
    handleNavigateToAddTask,
    handleDelete,
  };
};

export default useListView;
