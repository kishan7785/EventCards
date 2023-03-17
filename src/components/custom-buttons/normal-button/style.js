import {Dimensions, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {normalizeText} from '../../../utils/responsive-text';

const DeviceHeight = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  Container: {
    marginHorizontal: scale(20),
    marginTop:scale(25),
    marginBottom: scale(4),
  },
  button: {
    flexDirection: 'row',
    borderRadius: scale(12),
    padding: DeviceHeight < 720 ? 9 : 12,

    justifyContent: 'center',
    minWidth: DeviceHeight < 720 ? 60 : 90,
  },

  buttonText: {
    textAlign: 'center',
    fontSize: DeviceHeight < 720 ? normalizeText(16) : normalizeText(18),
    fontWeight: '500',
  },

  pressed: {
    opacity: 0.25,
    backgroundColor: 'white',
    borderRadius: 4,
  },
});
