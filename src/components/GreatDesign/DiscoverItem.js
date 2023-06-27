import React from 'react';
import {View, StyleSheet, ImageBackground, Image, Text} from 'react-native';

import {colors} from '../../helper/colorConstant';
import {icons} from '../../helper/iconConstant';
import {fontSize, hp, wp} from '../../helper/utilities';

const DiscoverItem = ({bgImg, title}) => {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={bgImg}
        style={styles.bgImgStyle}
        imageStyle={styles.bgImageRadius}>
        <Image source={icons.playBtn} style={styles.playBtnImg} />
        <View style={styles.innerMainView}>
          <View style={styles.textViewStyle}>
            <Text style={styles.textStyle}>{title}</Text>
          </View>
          <View style={styles.infoImgView}>
            <Image source={icons.info} style={styles.infoImgStyle} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: hp(1),
    marginLeft: wp(2),
    paddingBottom: hp(3),
  },
  bgImgStyle: {
    width: wp(35),
    height: hp(22),
    alignItems: 'center',
  },
  bgImageRadius: {
    borderRadius: wp(5),
  },
  playBtnImg: {
    top: hp(5),
    width: wp(15),
    height: wp(15),
  },
  innerMainView: {
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
  },
  textViewStyle: {
    top: hp(1),
    borderRadius: wp(5),
    paddingVertical: wp(2),
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
    fontSize: fontSize(20),
    paddingHorizontal: wp(3),
  },
  infoImgView: {
    width: wp(10),
    height: wp(10),
    bottom: -wp(4),
    borderRadius: wp(5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  infoImgStyle: {
    width: wp(6),
    height: wp(6),
    tintColor: colors.white,
  },
});

export default DiscoverItem;
