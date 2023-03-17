import {View, Text} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import {styles} from './example-3-styles';

const Example3 = () => {
  return (
    <View style={styles.MainContainer}>
      <Lottie
        source={require('../assets/lottieAnimation/animatedEmoji.json')}
        autoPlay={true}
        loop
        style={styles.lottieStyle}
      />
      <Lottie
        source={require('../assets/lottieAnimation/hello.json')}
        autoPlay={true}
        loop
        style={styles.hello}
      />

    </View>
  );
};

export default Example3;
