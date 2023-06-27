import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {colors} from '../../helper/colorConstant';
import {fontSize, hp, wp} from '../../helper/utilities';

const ProductItemView = ({
  source,
  nameTitle,
  name,
  habitatTitle,
  habitat,
  priceTitle,
  price,
  descTitle,
  description,
}) => {
  return (
    <View style={styles.mainContainer}>
      <FastImage source={source} style={styles.imgStyle} resizeMode={'cover'} />
      <View style={styles.rightMainView}>
        <Text style={styles.titleStyle}>
          {nameTitle}
          <Text
            style={[
              styles.titleStyle,
              {
                fontWeight: '500',
              },
            ]}>
            {name}
          </Text>
        </Text>
        <Text
          style={[
            styles.titleStyle,
            {
              marginTop: hp(0.5),
            },
          ]}>
          {habitatTitle}
          <Text
            style={[
              styles.titleStyle,
              {
                fontWeight: '500',
              },
            ]}>
            {habitat}
          </Text>
        </Text>
        <Text
          style={[
            styles.titleStyle,
            {
              marginTop: hp(0.5),
            },
          ]}>
          {priceTitle}
          <Text
            style={[
              styles.titleStyle,
              {
                fontWeight: '500',
              },
            ]}>
            {price}
          </Text>
        </Text>
        <Text
          style={[
            styles.titleStyle,
            {
              marginTop: hp(0.5),
            },
          ]}>
          {descTitle}
          <Text
            style={[
              styles.titleStyle,
              {
                fontSize: fontSize(16),
                fontWeight: '500',
              },
            ]}>
            {description}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    elevation: 10,
    padding: wp(3),
    shadowOpacity: 0.5,
    borderRadius: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(5),
    shadowColor: colors.gray,
    backgroundColor: colors.white,
    shadowOffset: {width: 2, height: 2},
  },
  imgStyle: {
    width: wp(25),
    height: wp(25),
    borderRadius: wp(3),
    borderWidth: wp(0.2),
    borderColor: colors.grayBorder,
  },
  rightMainView: {
    flex: 1,
    marginLeft: wp(3),
  },
  titleStyle: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: fontSize(18),
  },
});

export default ProductItemView;
