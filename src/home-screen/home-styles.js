import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import { COLORS } from '../constant/Colors/colors';
import {normalizeText} from '../utils/responsive-text';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:COLORS.navyBlue
  },
  button: {
    paddingHorizontal:scale(50),
    marginTop: scale(50),
    
  },
  buttonText: {

    textAlign: 'center',
    fontSize: normalizeText(18),
    fontWeight: '500',
    color: '#fff',
    padding: scale(10),
    backgroundColor: COLORS.Blue300,
    borderRadius: scale(15),
  },
});
