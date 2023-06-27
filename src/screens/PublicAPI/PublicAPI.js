import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import {useDispatch} from 'react-redux';

import {getProductDetails} from '../../actions/ProductAction';
import {ProductItemView, Header} from '../../components';
import {colors} from '../../helper/colorConstant';
import {stringConst} from '../../helper/constants';
import {icons} from '../../helper/iconConstant';
import {goBack} from '../../helper/rootNavigation';
import {hp} from '../../helper/utilities';

const PublicAPI = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const dispatch = useDispatch();

  console.log('Product List ::--', productList);

  useEffect(() => {
    setIsLoading(true);
    let request = {
      onSuccess: res => {
        if (res) {
          setProductList(res);
          setIsLoading(false);
        }
      },
      onFail: () => {
        setIsLoading(false);
      },
    };
    dispatch(getProductDetails(request));
  }, []);

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
        centerTitle={stringConst.publicAPI}
      />
      {!isLoading ? (
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
        <View style={styles.indicatorView}>
          <ActivityIndicator size={'large'} color={colors.black} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  indicatorView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemSepratorView: {
    height: hp(2),
  },
  bottomView: {
    height: hp(5),
  },
});

export default PublicAPI;
