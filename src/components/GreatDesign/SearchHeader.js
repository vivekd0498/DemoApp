import React from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';

import {colors} from '../../helper/colorConstant';
import {stringConst} from '../../helper/constants';
import {fontSize, hp, wp} from '../../helper/utilities';

function SearchHeader({
  // Props passing
  value,
  onChangeText,
  leftImgSource,
}) {
  return (
    <View style={styles.sectionStyle}>
      <Image source={leftImgSource} style={styles.searchImg} />
      <TextInput
        value={value}
        autoCorrect={false}
        style={styles.textInput}
        clearButtonMode="always"
        onChangeText={onChangeText}
        placeholderTextColor={colors.gray}
        placeholder={stringConst.searchPlaceholder}
      />
    </View>
  );
}

export default SearchHeader;

const styles = StyleSheet.create({
  sectionStyle: {
    elevation: 2,
    width: wp(90),
    height: hp(6.15),
    shadowOpacity: 0.3,
    alignSelf: 'center',
    paddingLeft: wp(4.5),
    alignItems: 'center',
    flexDirection: 'row',
    shadowRadius: wp(0.8),
    borderRadius: wp(6.7),
    paddingRight: wp(1.35),
    marginVertical: hp(1.5),
    shadowColor: colors.gray,
    backgroundColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  searchImg: {
    width: wp(4),
    height: wp(4),
    alignSelf: 'center',
    tintColor: colors.gray,
  },
  textInput: {
    flex: 1,
    color: colors.black,
    paddingLeft: wp(2.7),
    fontSize: fontSize(16),
  },
});
