import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

import AntIcon from 'react-native-vector-icons/AntDesign';
import {IMAGES} from '../../utils/images';
import {useNavigation} from '@react-navigation/native';
import {normalizeText} from '../utils/responsive-text';

const MainHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.touchableOpacity}>
          <AntIcon name={'arrowleft'} size={normalizeText(20)} color={'#fff'} />
        </TouchableOpacity>
        <Text style={styles.txtStyle}>Events</Text>
      </View>
    </View>
  );
};

export default MainHeader;
export const styles = StyleSheet.create({
  mainContainer: {
    height: scale(40),
    width: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  innerContainer: {
    paddingHorizontal: scale(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtStyle: {
    textAlign: 'center',
    fontSize: normalizeText(18),
    fontWeight: '500',
    color: '#fff',
    marginHorizontal: scale(20),
  },
  touchableOpacity: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
