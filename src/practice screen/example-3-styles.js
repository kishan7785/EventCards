import {scale} from 'react-native-size-matters';
import {StyleSheet} from 'react-native';
import { COLORS } from '../constant/Colors/colors';

export const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:COLORS.navyBlue,
    justifyContent: 'center',
  },
  lottieStyle: {
    marginTop:scale(80),
    height: scale(200),
    width: scale(200),
},
hello:{
    marginTop:scale(-40),
    //   height: scale(200),
      width: scale(400),
  }
});
