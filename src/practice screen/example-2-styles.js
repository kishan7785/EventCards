import { StyleSheet } from "react-native";
import { scale } from "react-native-size-matters";
import { COLORS } from "../constant/Colors/colors";
import { normalizeText } from "../utils/responsive-text";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.navyBlue,
      padding: scale(20),
    },
    innerContainer: {},
    imgStyle: {
      height: scale(80),
      width: scale(80),
      borderRadius: scale(5),
    },
    textStyle: {
      fontSize: normalizeText(14),
      color: COLORS.white,
      fontWeight: 'bold',
      paddingVertical: scale(5),
    },
    viewProfile: {
      fontSize: normalizeText(10),
      color: COLORS.white,
    },
    btns: color => ({
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: scale(10),
      backgroundColor: color,
      padding: scale(10),
      paddingVertical: scale(8),
      borderRadius: scale(5),
  
      width: '50%',
    }),
    iconStyle: Color => ({
      height: scale(20),
      width: scale(20),
      marginHorizontal: scale(5),
      tintColor: Color,
    }),
    btnText: Color => ({
      fontSize: normalizeText(15),
      fontWeight: 'bold',
      marginLeft: scale(5),
      color: Color,
    }),
    logout: {
      flexGrow: 1,
      marginTop: scale(100),
    },
    NavScreen: (ScaleValue, showMenu, offSetValue, flipAnimation) => ({
      padding: scale(20),
      backgroundColor: COLORS.white,
      flexGrow: 1,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      position: 'absolute',
      borderRadius: showMenu ? scale(15) : 0,
      transform: [
        {scale: ScaleValue},
        {translateX: offSetValue},
        {
          rotateY: flipAnimation.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'],
          }),
        },
      ],
    }),
    menuText: {
      fontSize: normalizeText(28),
      color: COLORS.navyBlue,
      fontWeight: 'bold',
      paddingVertical: scale(5),
    },
    imageStyle: {
      height: scale(200),
      width: '100%',
      borderRadius: scale(10),
    },
  });
  