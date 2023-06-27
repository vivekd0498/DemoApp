import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {colors} from '../../helper/colorConstant';
import {hp, wp, fontSize, statusBar} from '../../helper/utilities';

export default function HeaderWithBtn({source, onBackPress, source1, source2}) {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.btnView}
        onPress={onBackPress}
        hitSlop={{top: 10, right: 10, left: 10, bottom: 10}}>
        {/* <Text style={styles.backText}>{leftTitle}</Text> */}
        <Image source={source} style={styles.imgStyle} />
      </TouchableOpacity>
      <Image source={source1} style={styles.img1Style} resizeMode={'contain'} />
      <Image source={source2} style={styles.img2Style} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingTop: statusBar,
    justifyContent: 'space-between',
  },
  img1Style: {
    width: wp(35),
    height: wp(15),
  },
  img2Style: {
    top: hp(1),
    right: wp(6),
    width: wp(8),
    height: wp(8),
  },
  backText: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: fontSize(16),
  },
  centerText: {
    fontWeight: 'bold',
    color: colors.white,
    alignSelf: 'center',
    fontSize: fontSize(20),
  },
  btnView: {
    // width: wp(14.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    left: wp(4),
    width: wp(6),
    height: wp(6),
    tintColor: colors.black,
  },
});
