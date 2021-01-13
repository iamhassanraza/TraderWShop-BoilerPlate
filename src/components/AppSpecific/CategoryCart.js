import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FastImage} from '../../components';

export default function CategoryCart(props) {
  const {item} = props;
  return (
    <View
      style={{
        height: 200,
        backgroundColor: 'white',
        marginRight: 20,
        borderRadius: 20,
        padding: '10%',
        ...props.style,
      }}>
      <View style={{flex: 4}}>
        <FastImage
        cover
          style={{width: '100%', height: '100%'}}
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
  );
}

const styles = StyleSheet.create({});
