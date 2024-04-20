import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {Image} from 'react-native-animatable';
import Styles from './listViewStyles';
import OptionsMenu from 'react-native-options-menu';
import useListView from './useListView';

const MoreIcon = require('../../../../assets/options.png');

const ListView = () => {
  const {data, loading, error, handleNavigateToAddTask, handleDelete} =
    useListView();

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={Styles.screen}>
        <View style={Styles.container}>
          <View style={Styles.logo}>
            <Image source={require('../../../../assets/screenLogo.png')} />
          </View>
          <View style={Styles.searchBar}>
            <TextInput
              placeholder="Search task here..."
              style={Styles.search}
            />
            <Image
              source={require('../../../../assets/search.png')}
              style={Styles.searchIcon}
            />
          </View>
          {loading && data.length === 0 && (
            <View style={Styles.loaderContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}
          {data.length === 0 && !loading && (
            <View style={Styles.center}>
              <TouchableOpacity onPress={handleNavigateToAddTask}>
                <Image source={require('../../../../assets/EmptyState.png')} />
              </TouchableOpacity>
              <Text style={Styles.centerTextHead}>No Task</Text>
              <Text style={Styles.centerTextBody}>
                Looks like you don't have a task,
              </Text>
              <Text style={Styles.centerTextBody}>please add task</Text>
            </View>
          )}
          {data.length > 0 && (
            <FlatList
              data={data}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View style={[Styles.dataContainer]}>
                  <View>
                    <Text style={Styles.title}>{item.title}</Text>
                    <Text style={Styles.dateTime}>{item.datetime}</Text>
                    <Text style={Styles.note}>{item.note}</Text>
                    <View
                      style={[
                        Styles.tags,
                        item.tags === 'Urgent'
                          ? {backgroundColor: '#BA1735'}
                          : item.tags === 'Normal'
                          ? {backgroundColor: '#427DFE'}
                          : null,
                      ]}>
                      <Text style={Styles.tagText}>{item.tags}</Text>
                    </View>
                  </View>
                  <View style={{bottom: '12%'}}>
                    <OptionsMenu
                      button={MoreIcon}
                      buttonStyle={{width: 20, height: 20}}
                      destructiveIndex={1}
                      options={['Delete']}
                      actions={[() => handleDelete(item.id)]}
                    />
                  </View>
                </View>
              )}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default ListView;
