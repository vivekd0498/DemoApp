import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView} from 'react-native';

import {
  DiscoverItem,
  SearchHeader,
  HeaderWithBtn,
  MyCommunityItem,
  TrendingNowItem,
} from '../../components';
import {colors} from '../../helper/colorConstant';
import {stringConst} from '../../helper/constants';
import {icons} from '../../helper/iconConstant';
import {images} from '../../helper/imageConstant';
import {goBack} from '../../helper/rootNavigation';
import {fontSize, hp, wp} from '../../helper/utilities';

const discoverList = [
  {
    id: 1,
    name: 'Los Angeles',
    image: images.losAngeles,
  },
  {
    id: 2,
    name: 'Hawaii',
    image: images.hawaii,
  },
  {
    id: 3,
    name: 'Switzerland',
    image: images.switzerland,
  },
  {
    id: 4,
    name: 'greece',
    image: images.greece,
  },
  {
    id: 5,
    name: 'Turkey',
    image: images.turkey,
  },
];

const myCommunityList = [
  {
    id: 1,
    name: 'Jane_Smith',
    image: images.janeSmith,
  },
  {
    id: 2,
    name: 'Sara_Parker',
    image: images.saraParker,
  },
  {
    id: 3,
    name: 'Smith_Rowe',
    image: images.smithRowe,
  },
  {
    id: 4,
    name: 'Kylo_Ren',
    image: images.kyloRen,
  },
  {
    id: 5,
    name: 'Keller_Williams',
    image: images.kellerWilliams,
  },
];
const trendingNowList = [
  {
    id: 1,
    name: 'ADVENTURE & SPORTS',
    image: images.adventureSports,
  },
  {
    id: 2,
    name: 'NATURE',
    image: images.nature,
  },
  {
    id: 3,
    name: 'SPORTS',
    image: images.sports,
  },
  {
    id: 4,
    name: 'MOUNTAIN',
    image: images.mountain,
  },
  {
    id: 5,
    name: 'CLIMB',
    image: images.climb,
  },
];

const GreatDesign = () => {
  const [searchText, setSearchText] = useState('');

  const onChangeText = text => {
    setSearchText(text);
  };

  const renderDiscoverItem = ({item, index}) => {
    return <DiscoverItem bgImg={item?.image} title={item?.name} />;
  };

  const renderMyCommunityItem = ({item, index}) => {
    return <MyCommunityItem source={item?.image} title={item?.name} />;
  };

  const renderTrendingNowItem = ({item, index}) => {
    return (
      <TrendingNowItem
        bgImg={item?.image}
        source={icons.playBtn}
        title={item?.name}
      />
    );
  };

  return (
    <View style={styles.mainContainer}>
      <HeaderWithBtn
        source={icons.back}
        source2={icons.like}
        source1={icons.bederText}
        onBackPress={() => goBack()}
        leftTitle={stringConst.back}
        centerTitle={stringConst.greatDesign}
      />
      <SearchHeader
        value={searchText}
        onChangeText={onChangeText}
        leftImgSource={icons.search}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.discoverView}>
          <Text style={styles.discoverText}>{stringConst.discover}</Text>
          <FlatList
            horizontal
            data={discoverList}
            renderItem={renderDiscoverItem}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={() => <View style={{width: wp(3)}} />}
            ListFooterComponent={() => <View style={{width: wp(3)}} />}
            ItemSeparatorComponent={() => <View style={{width: wp(2)}} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={styles.myCommView}>
          <Text style={styles.myCommText}>{stringConst.myCommunity}</Text>
          <FlatList
            horizontal
            data={myCommunityList}
            style={{marginTop: hp(1)}}
            renderItem={renderMyCommunityItem}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={() => <View style={{width: wp(3)}} />}
            ListFooterComponent={() => <View style={{width: wp(3)}} />}
            ItemSeparatorComponent={() => <View style={{width: wp(4)}} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={{marginBottom: hp(5)}}>
          <Text style={styles.trendingText}>{stringConst.trendingNow}</Text>
          <FlatList
            horizontal
            data={trendingNowList}
            renderItem={renderTrendingNowItem}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={() => <View style={{width: wp(5)}} />}
            ListFooterComponent={() => <View style={{width: wp(3)}} />}
            ItemSeparatorComponent={() => <View style={{width: wp(4)}} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  discoverView: {
    marginTop: hp(1),
  },
  discoverText: {
    marginLeft: wp(3),
    fontWeight: 'bold',
    color: colors.black,
    fontSize: fontSize(30),
  },
  myCommView: {
    marginTop: hp(1),
    paddingTop: hp(1.5),
    paddingBottom: hp(3),
    backgroundColor: colors.black,
  },
  myCommText: {
    marginLeft: wp(5),
    fontWeight: 'bold',
    color: colors.white,
    fontSize: fontSize(24),
  },
  trendingText: {
    marginLeft: wp(5),
    fontWeight: 'bold',
    color: colors.black,
    marginVertical: hp(2),
    fontSize: fontSize(24),
  },
});

export default GreatDesign;
