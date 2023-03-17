import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {STATIC_DATA} from '../constant/dummy-data/static-data';
//screensItem
import HeaderItems from '../components/header-items/hearder-items';
import {scale} from 'react-native-size-matters';
import {
  Directions,
  FlingGestureHandler,
  State,
} from 'react-native-gesture-handler';
import {useSwipe} from '../utils/swiper';
import MainHeader from '../components/main-header';
import {styles} from './example-1-styles';

let {width} = Dimensions.get('screen');
let ITEM_WIDTH = width * 0.8;
let ITEM_HEIGHT = width * 1.1;
let VISIBLE_ITEM = 3;

const Example1 = () => {
  const {onTouchStart, onTouchEnd} = useSwipe(onSwipeLeft, onSwipeRight, 6);

  const [DATA, SETDATA] = useState(STATIC_DATA);
  const [index, setIndex] = useState(0);
  const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimation = React.useRef(new Animated.Value(0)).current;

  const setActivityIndex = React.useCallback(activeIndex => {
    setIndex(activeIndex);
    scrollXIndex.setValue(activeIndex);
  });
  useEffect(() => {
    Animated.spring(scrollXAnimation, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
    let count = 0;
    setInterval(() => {
      // console.log('count:', count);
      if (count === DATA.length - 1) {
        count = 0;
      } else {
        count = count + 1;
      }
      // scrollXIndex.setValue(count);
    }, 3000);
  });
  function onSwipeLeft() {
    if (index === DATA.length - 1) {
      return;
    }
    {
      setActivityIndex(index + 1);
    }
  }
  function onSwipeRight() {
    if (index === 0) {
      return;
    }
    {
      setActivityIndex(index - 1);
    }
  }

  const renderItem = ({item, index}) => {
    const inputRange = [index - 1, index, index + 1];
    const translateX = scrollXAnimation.interpolate({
      inputRange,
      outputRange: [45, 0, -300],
    });
    const scale = scrollXAnimation.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0],
    });
    const opacity = scrollXAnimation.interpolate({
      inputRange,
      outputRange: [2 - 2 / VISIBLE_ITEM, 1, 0],
    });
    return (
      <Animated.View style={styles.imageContainer(translateX, scale, opacity)}>
        {Platform.OS === 'android' ? (
          <View onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <Image
              source={{uri: item.poster}}
              style={styles.imgStyle}
              resizeMode="cover"
            />
          </View>
        ) : (
          <Image
            source={{uri: item.poster}}
            style={styles.imgStyle}
            resizeMode="cover"
          />
        )}
      </Animated.View>
    );
  };
  return (
    <FlingGestureHandler
      key="left"
      direction={Directions.LEFT}
      onHandlerStateChange={({ev}) => {
        console.log('ev:', ev);
        if (ev.nativeEvent.state === State.END) {
          if (index === DATA.length - 1) {
            return;
          }
          {
            setActivityIndex(index + 1);
          }
        }
      }}>
      <FlingGestureHandler
        key="right"
        direction={Directions.RIGHT}
        onHandlerStateChange={({ev}) => {
          console.log('ev:', ev);
          if (ev.nativeEvent.state === State.END) {
            if (index === 0) {
              return;
            }
            {
              setActivityIndex(index - 1);
            }
          }
        }}>
        <SafeAreaView style={styles.MainContainer}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {}}
            style={{flex: 1, paddingHorizontal: scale(20)}}>
            {DATA.map((item, inx) => {
              const inputRange = [inx - 1, inx, inx + 1];
              const opacity = scrollXAnimation.interpolate({
                inputRange,
                outputRange: [0, 1, 0],
              });

              return (
                <Animated.Image
                  key={`image-${inx}`}
                  style={[StyleSheet.absoluteFillObject, {opacity}]}
                  source={{
                    uri: item.poster,
                  }}
                  blurRadius={40}
                />
              );
            })}
            <MainHeader />
            <HeaderItems DATA={DATA} scrollXAnimation={scrollXAnimation} />
            <FlatList
              data={DATA}
              keyExtractor={(_, inx) => String(inx)}
              horizontal
              inverted={true}
              contentContainerStyle={styles.contentContainerStyle}
              CellRendererComponent={({
                item,
                index,
                children,
                style,
                ...props
              }) => {
                const newStyle = [style, {zIndex: DATA.length - index}];

                return (
                  <View style={newStyle} index={index} {...props}>
                    {children}
                  </View>
                );
              }}
              initialNumToRender={DATA.length}
              scrollEnabled={false}
              removeClippedSubviews={false}
              renderItem={renderItem}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

export default Example1;
