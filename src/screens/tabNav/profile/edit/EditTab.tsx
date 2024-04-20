import {View, Image} from 'react-native';
import React from 'react';
import CustomBackButtonHeading from '../../../../components/customBackButtonHeading/CustomBackButtonHeading';
import Placeholder from '../../../../components/placeholder/Placeholder';
import ClickButton from '../../../../components/clickButton/ClickButton';
import Styles from './editTabStyles';
import Images from '../../../../constants/Images';

const EditTab = () => {
  return (
    <View style={Styles.screen}>
      <View style={Styles.container}>
        <CustomBackButtonHeading
          title={'Edit Profile'}
          titleStyle={Styles.titleStyle}
        />
        <View style={Styles.profile}>
          <Image source={Images.EmptyProfileFree} style={Styles.dp} />
        </View>
        <Placeholder title="Full Name" placeholder="Username" />
        <Placeholder title="Email Address" placeholder="E-mail" />
        <View style={Styles.button}>
          <ClickButton text="Save Changes" onPress="" />
        </View>
      </View>
    </View>
  );
};

export default EditTab;
