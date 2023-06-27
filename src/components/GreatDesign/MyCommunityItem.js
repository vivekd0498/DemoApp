import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

import {colors} from '../../helper/colorConstant';
import {fontSize, hp, wp} from '../../helper/utilities';

const MyCommunityItem = ({source, title}) => {
  return (
    <View style={styles.mainContainer}>
      <Image source={source} style={styles.imgStyle} />
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  imgStyle: {
    width: wp(28),
    height: wp(28),
    borderWidth: wp(0.8),
    borderRadius: wp(14),
    borderColor: colors.borderColor,
  },
  titleText: {
    marginTop: hp(1),
    fontWeight: 'bold',
    color: colors.gray,
    fontSize: fontSize(18),
  },
});

export default MyCommunityItem;
