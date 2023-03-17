import {scale} from 'react-native-size-matters';
import { Dimensions, StyleSheet } from 'react-native';

let {width} = Dimensions.get('screen');
let ITEM_WIDTH = width * 0.8;
let ITEM_HEIGHT = width * 1.1;
export const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    // paddingHorizontal: scale(20),
    justifyContent: 'center',
  },
  imageContainer: (translateX, scale, opacity) => ({
    position: 'absolute',
    left: -ITEM_WIDTH / 2.1,
    opacity,
    transform: [{translateX}, {scale}],
  }),
  imgStyle: {
    height: ITEM_HEIGHT,
    width: ITEM_WIDTH,
    borderRadius: scale(16),
  },
  contentContainerStyle: {
    flex: 1,
    justifyContent: 'center',

    padding: scale(10) * 2,
  },
});
