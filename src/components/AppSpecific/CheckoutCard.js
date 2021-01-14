import React from 'react';
import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import {colors, metrics, text} from '../../utils/Theme';
import {FastImage} from '../../components';
import Navigator from '../../utils/Navigator';

export default function CheckoutCard(props) {
  const {item} = props;

  return (
    <TouchableWithoutFeedback
      onPress={() => Navigator.navigate('ProductDetail', {item})}>
      <View
        style={{
          flexDirection: 'row',
          height: metrics.height * 0.18,
          width: metrics.width * 0.8,
          backgroundColor: 'white',
          justifyContent: 'space-around',
          borderRadius: 10,
          marginRight: metrics.smallMargin,
        }}>
        <View style={{flex: 3}}>
          <FastImage
            cover
            source={item.image}
            style={{
              width: '100%',
              height: '100%',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}></FastImage>
          <View
            style={{
              backgroundColor: colors.primary,
              position: 'absolute',
              right: 0,
              bottom: 0,
              paddingHorizontal: '10%',
              paddingVertical: '5%',
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: 5,
            }}>
            <Text
              style={{...styles.heading, color: 'white', fontWeight: 'bold'}}>
              $ {parseFloat(item.price).toFixed(2)}
            </Text>
          </View>
        </View>
        <View style={{flex: 3, paddingHorizontal: metrics.defaultMargin}}>
          <Text numberOfLines={1} style={text.heading}>
            {item.productname}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{...styles.heading}}>Color</Text>
              <View
                style={{
                  width: 20,
                  height: 20,
                  marginTop: 10,
                  borderRadius: 10,
                  backgroundColor: item.color,
                }}></View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{...styles.heading}}>Size</Text>
              <Text style={{...styles.text}}>{item.size}</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{...styles.heading}}>QTY</Text>
              <Text style={{...styles.text}}>{item.quantity}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: '600',
  },
  heading: {
    fontSize: 16,
    color: colors.grey,
  },
});
