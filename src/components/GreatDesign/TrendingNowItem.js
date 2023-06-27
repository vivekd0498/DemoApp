import React from 'react';
import {View, StyleSheet, ImageBackground, Image, Text} from 'react-native';
import {colors} from '../../helper/colorConstant';
import {fontSize, hp, wp} from '../../helper/utilities';

const TrendingNowItem = ({bgImg, source, title}) => {
  return (
    <ImageBackground source={bgImg} style={styles.mainContainer}>
      <Image source={source} style={styles.imageStyle} />
      <View style={styles.titleViewStyle}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: wp(55),
    height: hp(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: wp(16),
    height: wp(16),
  },
  titleViewStyle: {
    width: wp(42),
    height: hp(7),
    marginTop: hp(3),
    borderWidth: wp(0.4),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: wp(5),
    borderBottomLeftRadius: wp(5),
    borderColor: colors.borderColor,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  titleText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
    fontSize: fontSize(20),
  },
});

export default TrendingNowItem;
