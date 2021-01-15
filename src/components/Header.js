import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, metrics} from '../utils/Theme';
import Icon from 'react-native-vector-icons/AntDesign';
import Navigator from '../utils/Navigator';
import AddToFav from '../components/AddToFav'
// props
// leftComponent ()=> <View>
// rightComponent ()=> <View>
//showAddToCart
//showCart
//showFavourites
//transparent
//hideLeft
export default function Header(props) {
  const _renderOnLeft = () => {
    if (props.hideLeft) {
      return null;
    }
    if (props.leftComponent) {
      return props.leftComponent();
    }
    return (
      <TouchableOpacity onPress={() => Navigator.goBack()}>
        <Icon name={'left'} size={metrics.height * 0.03}></Icon>
      </TouchableOpacity>
    );
  };

  const _renderInMiddle = () => {
    return (
      <Text style={{fontSize: metrics.height * 0.03, fontWeight: 'bold',textTransform:'capitalize'}}>
        {props.title}
      </Text>
    );
  };

  const _renderOnRight = () => {
    if (props.rightCompnent) {
      return props.rightCompnent();
    }

    if (props.showAddToCart) {
      return (
        <TouchableOpacity onPress={() => props.onRightPress()}>
          <Icon
            name={props.fill ? 'heart' : 'hearto'}
            color={'red'}
            size={metrics.height * 0.03}></Icon>
        </TouchableOpacity>
      );
    }

    if (props.showCart) {
      return (
        <View>
          <Icon name={'shoppingcart'} size={metrics.height * 0.035}></Icon>
          <View
            style={{
              position: 'absolute',
              right: -5,
              top: -5,
              backgroundColor: colors.primary,
              borderRadius: 10,
              width: metrics.height * 0.02,
              height: metrics.height * 0.02,
              padding: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: metrics.height * 0.01,
                alignSelf: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}>
              4
            </Text>
          </View>
        </View>
      );
    }
    if (props.showFavourites) {
      return (
        <View>
          <Icon
            name={'heart'}
            color={'red'}
            size={metrics.height * 0.035}></Icon>
          <View
            style={{
              position: 'absolute',
              right: -5,
              top: -5,
              backgroundColor: colors.primary,
              borderRadius: 10,
              width: metrics.height * 0.02,
              height: metrics.height * 0.02,
              padding: 2,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: metrics.height * 0.01,
                alignSelf: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}>
              4
            </Text>
          </View>
        </View>
      );
    }
  };
  return (
    <View
      style={[
        styles.container,
        props.transparent && {
          position: 'absolute',
          zIndex: 100,
          width: '100%',
        },
        props.containerStyle,
      ]}>
      <View style={[styles.leftRight]}>{_renderOnLeft()}</View>
      <View style={[styles.leftRight, {flex: 5}]}>{_renderInMiddle()}</View>
      <View style={[styles.leftRight]}>{_renderOnRight()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: metrics.height * 0.07,

    flexDirection: 'row',
  },
  leftRight: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
