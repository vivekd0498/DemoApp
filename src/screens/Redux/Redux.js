import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';

import {ProductItemView, Header} from '../../components';
import {colors} from '../../helper/colorConstant';
import {stringConst} from '../../helper/constants';
import {icons} from '../../helper/iconConstant';
import {goBack} from '../../helper/rootNavigation';
import {fontSize, hp} from '../../helper/utilities';

const Redux = () => {
  const {productList} = useSelector(state => state.product);
  console.log('Product List Redux ::--', productList);

  const renderItem = ({item, index}) => {
    return (
      <ProductItemView
        source={{uri: item?.thumbnail}}
        nameTitle={stringConst.nameTitle}
        name={item?.title}
        habitatTitle={stringConst.habitatTitle}
        habitat={item?.brand}
        priceTitle={stringConst.priceTitle}
        price={`$${item?.price}`}
        descTitle={stringConst.descTitle}
        description={item?.description}
      />
    );
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        source={icons.back}
        onBackPress={() => goBack()}
        leftTitle={stringConst.back}
        centerTitle={stringConst.redux}
      />
      {productList?.length > 0 ? (
        <FlatList
          data={productList}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <View style={styles.itemSepratorView} />}
          ListFooterComponent={() => <View style={styles.bottomView} />}
          ItemSeparatorComponent={() => (
            <View style={styles.itemSepratorView} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={styles.noDataView}>
          <Text style={styles.noDataText}>{stringConst.noDataFound}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  itemSepratorView: {
    height: hp(2),
  },
  bottomView: {
    height: hp(5),
  },
  noDataView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noDataText: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: fontSize(24),
  },
});

export default Redux;
