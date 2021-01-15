import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Header,
  SizeInspector,
  FastImage,
  Rating,
  QuantityView,
  Button,
  AddToFav,
} from '../components';
import Navigator from '../utils/Navigator';
import {colors, commonstyles, metrics} from '../utils/Theme';
import {Add, Remove, setSize} from '../store/Cart';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

export default function ProductDetail(props) {
  const {item} = props.route.params;

  const itemcopy = useSelector((state) => {
    return state.Cart.products.find((val) => val.id == item.id);
  });

  const product = useSelector((state) => {
    return state.Cart.items.find((val) => val.id == item.id);
  });
  const [size, setsize] = useState(itemcopy.size);
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
        <View style={[commonstyles.spaceBetween]}>
          <View style={{width: '80%'}}>
            <Text numberOfLines={1} style={commonstyles.largeText}>
              {item.productname}
            </Text>
          </View>
          <View style={{width: '20%', alignItems: 'flex-end'}}>
            {/* <Rating value={4.2}></Rating> */}
            <Text
              numberOfLines={1}
              style={[
                commonstyles.largeText,
                {color: colors.primary, fontSize: 20},
              ]}>
              ${item.price}
            </Text>
          </View>
        </View>
        <View>
          <Text style={{fontSize: 14, color: colors.grey, marginBottom: '5%'}}>
            {item.description}
          </Text>
        </View>
        <Text
          style={[
            commonstyles.largeText,
            {fontSize: 20, marginBottom: metrics.defaultMargin},
          ]}>
          Composition:{' '}
          <Text
            style={{
              fontWeight: '400',
              fontSize: 18,

              color: colors.primary,
            }}>
            {item.composition}
          </Text>
        </Text>

        <SizeInspector
          value={size}
          getSelectedValue={(val) => {
            dispatch(setSize({...item, size: val}));
            setsize(val);
          }}
          arr={['XS', 'S', 'M', 'L']}></SizeInspector>
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
                dispatch(Remove({...item}));
              }}></QuantityView>
          </View>
          <Text style={commonstyles.smallText}>
            Total Price: ${totalPrice.toFixed(2)}
          </Text>
        </View>
        <Button
          onPress={() => {
            Navigator.navigate('Checkout');
          }}
          text={'Add to Cart'}></Button>
      </View>
    </View>
  );
}
