import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  Animated,
} from 'react-native';
import React, {useState} from 'react';
import {scale} from 'react-native-size-matters';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
const HeaderItems = ({DATA, scrollXAnimation}) => {
  const inputRange = [-1, 0, 1];

  const translateY = scrollXAnimation.interpolate({
    inputRange,
    outputRange: [scale(70), 0, scale(-70)],
  });

  return (
    <View style={styles.mainContainer}>
      <Animated.View style={{transform: [{translateY}]}}>
        {DATA.map((item, index) => {
          return (
            <View key={index} style={styles.innerView}>
              <Text numberOfLines={1} style={styles.titleStyle}>
                {item.title}
              </Text>
              <View style={styles.itemContainerRow}>
                <Text style={styles.location}>
                  <EvilIcons
                    name="location"
                    size={18}
                    color={'#fff'}
                    style={{marginRight: 5}}
                  />{" "}
                  {item.location}
                </Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </View>
          );
        })}
      </Animated.View>
    </View>
  );
};

export default HeaderItems;

const styles = StyleSheet.create({
  mainContainer: {
    height: scale(70),

    overflow: 'hidden',
  },
  innerView: {
    height: scale(70),
    padding: scale(10),
  },
  titleStyle: {
    fontSize: 28,
    letterSpacing: -1,
    fontWeight: 'bold',
    color: '#fff',
  },
  itemContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  location: {
    fontSize: 16,
    color: '#fff',
  },
  date: {
    fontSize: 12,
    color: '#fff',
  },
});
