import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import {colors} from '../../helper/colorConstant';
import {hp, wp, fontSize, statusBar} from '../../helper/utilities';

export default function Header({source, centerTitle, onBackPress}) {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.btnView}
        onPress={onBackPress}
        hitSlop={{top: 10, right: 10, left: 10, bottom: 10}}>
        {/* <Text style={styles.backText}>{leftTitle}</Text> */}
        <Image source={source} style={styles.imgStyle} />
      </TouchableOpacity>
      <Text style={styles.centerText}>{centerTitle}</Text>
      <View style={styles.btnView} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingTop: statusBar,
    justifyContent: 'space-between',
    backgroundColor: colors.darkGreen,
  },
  btnView: {
    width: wp(14.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: wp(5),
    height: wp(5),
    tintColor: colors.white,
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
    marginVertical: hp(1),
  },
});
