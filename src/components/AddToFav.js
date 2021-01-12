import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Add, Remove, emptyCart, addToFav} from '../store/Cart';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {metrics} from '../utils/Theme';

export default function AddToFav(props) {
  if (props.disabled) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <Icon
          name={'heart'}
          color={'red'}
          size={props.size ? props.size : metrics.height * 0.02}></Icon>
      </TouchableOpacity>
    );
  }

  const {item} = props;
  const isFAV = useSelector((state) => {
    return state.Cart.favItems.hasOwnProperty(item.id);
  });
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: isFAV ? 'red' : 'white',
        height: metrics.height * 0.04,
        width: metrics.height * 0.04,
        borderRadius: (metrics.height * 0.04) / 2,
        padding: '10%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={() => {
        dispatch(addToFav({...item}));
      }}>
      <Icon
        name={isFAV ? 'heart' : 'hearto'}
        color={isFAV ? 'white' : 'red'}
        size={metrics.height * 0.02}></Icon>
    </TouchableOpacity>
  );
}
