import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';

import {scale} from 'react-native-size-matters';

import AntIcon from 'react-native-vector-icons/AntDesign';
import {normalizeText} from '../utils/responsive-text';

import {IMAGES} from '../constant/Images/images';
import { COLORS } from '../constant/Colors/colors';
import { styles } from './example-2-styles';

const DemoScreen = () => {
  const [currentTab, setCurrentTab] = useState('Home');
  const [showMenu, setShowMenu] = useState(false);
  const [Value, setValue] = useState(1);

  const offSetValue = useRef(new Animated.Value(0)).current;
  const ScaleValue = useRef(new Animated.Value(1)).current;

  const flipAnimation = useRef(new Animated.Value(0)).current;

  function AnimateHepler(value) {
    Animated.parallel([
      Animated.timing(ScaleValue, {
        toValue: showMenu ? 1 : 0.88,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(offSetValue, {
        toValue: showMenu ? 0 : 220,
        duration: 400,
        useNativeDriver: true,
      }),
      value == 'From Button' &&
        Animated.timing(flipAnimation, {
          toValue: 360,
          duration: 500,
          useNativeDriver: true,
        }),
    ]).start(() => {
      flipAnimation.setValue(0);
    });
  }

  // console.log('flipRotation:', flipRotation);
  const DrawerButtons = (currentTab, setCurrentTab, title, image) => {
    const BXColor = currentTab == title ? COLORS.white : 'transparent';
    const TxColor = currentTab == title ? COLORS.navyBlue : COLORS.white;
    return (
      <TouchableOpacity
        onPress={() => {
          if (title == 'Logout') {
          } else {
            setCurrentTab(title);

            AnimateHepler('From Button');
            setShowMenu(!showMenu);
          }
        }}>
        <View style={styles.btns(BXColor)}>
          <Image
            style={styles.iconStyle(TxColor)}
            source={image}
            resizeMode={'contain'}
          />
          <Text style={styles.btnText(TxColor)}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1678085711358-09a757349818?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
          style={styles.imgStyle}
        />
        <Text style={styles.textStyle}>John Doe</Text>
        <TouchableOpacity>
          <Text style={styles.viewProfile}>View Profile</Text>
        </TouchableOpacity>
        {DrawerButtons(currentTab, setCurrentTab, 'Home', IMAGES.home1)}
        {DrawerButtons(
          currentTab,
          setCurrentTab,
          'All Request',
          IMAGES.request1,
        )}
        {DrawerButtons(
          currentTab,
          setCurrentTab,
          'All Responce',
          IMAGES.resource1,
        )}
        {DrawerButtons(currentTab, setCurrentTab, 'Setting', IMAGES.setting1)}
      </View>
      <View style={styles.logout}>
        {DrawerButtons(currentTab, setCurrentTab, 'Logout', IMAGES.logout)}
      </View>

      <Animated.View
        style={styles.NavScreen(
          ScaleValue,
          showMenu,
          offSetValue,
          flipAnimation,
        )}>
        <TouchableOpacity
          onPress={() => {
            AnimateHepler();

            setShowMenu(!showMenu);
          }}>
          <AntIcon
            name={showMenu ? 'close' : 'menu-fold'}
            size={normalizeText(18)}
            color={COLORS.navyBlue}
          />
        </TouchableOpacity>
        <Text style={styles.menuText}>{currentTab}</Text>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1678085711358-09a757349818?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          }}
          style={styles.imageStyle}
        />
        <Text style={{}}>React Native Dev.</Text>
      </Animated.View>
    </SafeAreaView>
  );
};

export default DemoScreen;

