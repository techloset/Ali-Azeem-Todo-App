import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import CustomBackButtonHeading from '../../../../components/customBackButtonHeading/CustomBackButtonHeading';
import Placeholder from '../../../../components/placeholder/Placeholder';
import ClickButton from '../../../../components/clickButton/ClickButton';

const EditTab = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <CustomBackButtonHeading
          title={'Edit Profile'}
          titleStyle={styles.titleStyle}
        />
        <View style={styles.profile}>
          <Image
            source={require('../../../../../assets/MyPic.png')}
            style={styles.dp}
          />
        </View>
        <Placeholder title="Full Name" placeholder="Username" />
        <Placeholder title="Email Address" placeholder="E-mail" />
        <View style={styles.button}>
          <ClickButton text="Save Changes" onPress="" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginHorizontal: 15,
  },
  profile: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 17,
  },
  titleStyle: {
    marginLeft: 55,
  },
  dp: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  button: {
    marginTop: 339,
  },
});

export default EditTab;
