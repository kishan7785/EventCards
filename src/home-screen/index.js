import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {styles} from './home-styles';
import CustomButton from '../components/custom-buttons/normal-button/normal-button';
import {COLORS} from '../constant/Colors/colors';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomButton
        textColor={COLORS.white}
        color={COLORS.Blue300}
        onpress={() => {
          navigation.navigate('Example1');
        }}>
        example1
      </CustomButton>
      <CustomButton
        textColor={COLORS.white}
        color={COLORS.Blue300}
        onpress={() => {
          navigation.navigate('Example2');
        }}>
        example2
      </CustomButton>
      <CustomButton
        textColor={COLORS.white}
        color={COLORS.Blue300}
        onpress={() => {
          navigation.navigate('Example3');
        }}>
        example3
      </CustomButton>
    </SafeAreaView>
  );
};

export default HomeScreen;
