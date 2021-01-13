import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {FastImage} from '../../components';
import {metrics} from '../../utils/Theme';
import Navigator from '../../utils/Navigator';

export default function CategoryCart(props) {
  const {item} = props;
  return (
    <TouchableOpacity
      onPress={() =>
        Navigator.navigate('AllProducts', {show: 'category', item: item})
      }>
      <View
        style={{
          height: 200,
          backgroundColor: 'white',
          borderRadius: 20,
          padding: metrics.smallMargin + 10,

          ...props.style,
        }}>
        <View style={{flex: 4, marginBottom: '5%'}}>
          <FastImage
            cover
            style={{width: '100%', height: '100%', borderRadius: 10}}
            source={item.image}></FastImage>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20}}>{item.category}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
