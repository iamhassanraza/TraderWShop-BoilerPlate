import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FastImage} from '../index';
import {colors, metrics, commonstyles} from '../../utils/Theme';
export default function ItemCard(props) {
  const {item} = props;
  return (
    <View
      style={{
        height: 230,
        borderRadius: 10,
        backgroundColor: colors.background,
      }}>
      <View style={{flex: 2, zIndex: 100, width: '70%', alignSelf: 'center'}}>
        <FastImage
          contain
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: colors.third,
            borderRadius: 20,
          }}
          source={item.image}></FastImage>
      </View>
      <View
        style={{
          flex: 2,
          borderRadius: 10,
          width: '100%',
          justifyContent: 'flex-end',
          // paddingTop: 100,
          marginTop: -metrics.height * 0.05,
          backgroundColor: 'white',
          ...commonstyles.shadow,
        }}>
        <Text
          numberOfLines={1}
          style={{
            marginHorizontal: metrics.smallMargin,
            marginBottom: metrics.smallMargin,
            fontSize: 18,
            fontWeight: '500',
          }}>
          {item.productname}
        </Text>
        <Text
          style={{
            marginHorizontal: metrics.smallMargin,
            marginBottom: metrics.smallMargin,
            fontWeight: 'bold',
            // color:colors.grey,
            fontSize: 16,
          }}>
          Price ${item.price}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
