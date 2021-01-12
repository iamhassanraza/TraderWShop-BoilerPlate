import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import {metrics, colors} from '../utils/Theme';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';

export default function CartIcon(props) {
  const count = useSelector((state) => {
    return Object.keys(state.Cart.items).length;
  });
  return (
    <TouchableOpacity onPress={props.onPress}>
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
          {count}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
