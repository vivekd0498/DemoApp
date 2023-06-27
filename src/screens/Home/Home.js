import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {Button} from '../../components';
import {stringConst} from '../../helper/constants';
import {navigate} from '../../helper/rootNavigation';
import {hp} from '../../helper/utilities';

const Home = () => {
  const onPublicAPIPress = () => {
    navigate('PublicApi');
  };

  const onReduxPress = () => {
    navigate('Redux');
  };

  const onGreatDesignPress = () => {
    navigate('GreatDesign');
  };

  return (
    <View style={styles.mainContainer}>
      <Button title={stringConst.publicAPI} onPress={onPublicAPIPress} />
      <View style={styles.seprateViewStyle} />
      <Button title={stringConst.redux} onPress={onReduxPress} />
      <View style={styles.seprateViewStyle} />
      <Button title={stringConst.greatDesign} onPress={onGreatDesignPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seprateViewStyle: {
    height: hp(3),
  },
});

export default Home;
