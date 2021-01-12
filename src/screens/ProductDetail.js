import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  SearchBar,
  Header,
  HorizontalList,
  SizeInspector,
  ColorInspector,
  FastImage,
  Rating,
  VerticalList,
  QuantityView,
  Button,
  AddToFav,
} from '../components';
import Navigator from '../utils/Navigator';
import {colors, commonstyles, metrics} from '../utils/Theme';
import {Add, Remove, emptyCart, addToFav} from '../store/Cart';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

export default function ProductDetail(props) {
  const {item} = props.route.params;
  const product = useSelector((state) => {
    if (state.Cart.items.hasOwnProperty(item.id)) {
      return state.Cart.items[item.id];
    } else {
      return item;
    }
  });

  const totalPrice = useSelector((state) => state.Cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, backgroundColor: colors.lightBackground}}>
      <Header
        rightCompnent={() => <AddToFav item={item}></AddToFav>}
        transparent></Header>
      <View style={{flex: 1, backgroundColor: colors.background}}>
        <FastImage
          cover
          style={{width: '100%', height: '100%'}}
          source={item.image}></FastImage>
      </View>
      <View
        style={{
          flex: 1.2,
          paddingHorizontal: metrics.defaultMargin,
          backgroundColor: colors.lightBackground,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
        }}>
        <View style={commonstyles.spaceBetween}>
          <Text style={commonstyles.largeText}>{item.productname}</Text>
          <Rating value={4.5}></Rating>
        </View>
        <View>
          <Text style={{fontSize: 14, color: colors.grey, marginBottom: '5%'}}>
            {item.description}
          </Text>
        </View>
        <SizeInspector arr={[1, 2, 3, 4]}></SizeInspector>
        <ColorInspector
          arr={['red', 'yellow', 'orange', 'green', 'blue']}></ColorInspector>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          paddingHorizontal: metrics.defaultMargin,
        }}>
        <View style={{...commonstyles.spaceBetween}}>
          <View>
            <QuantityView
              value={product?.quantity || 0}
              onAdd={() => {
                dispatch(Add({...item}));
              }}
              onMinus={() => {
                console.log('chala');
                dispatch(Remove({...item}));
              }}></QuantityView>
          </View>
          <Text style={commonstyles.smallText}>Total Price: ${totalPrice}</Text>
        </View>
        <Button
          onPress={() => {
            Navigator.navigate('Checkout');
          }}
          text={'PREE'}></Button>
      </View>
    </View>
  );
}
