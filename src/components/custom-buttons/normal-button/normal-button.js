import {
  Pressable,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {styles} from './style';

function CustomButton({name, children, onpress, color, textColor, border}) {
  return (
    <View style={[styles.Container, {borderWidth: border}]}>
      <Pressable
        onPress={onpress}
        style={({pressed}) => pressed && styles.pressed}>
        <View style={[styles.button, {backgroundColor: color}]}>
          <Text style={[styles.buttonText, {color: textColor}]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
export default CustomButton;
