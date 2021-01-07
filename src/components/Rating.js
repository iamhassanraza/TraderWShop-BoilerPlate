import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../utils/Theme';
// usage
{/* <Rating value={4.5}></Rating> */}

export default function Rating(props) {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Icon name={'star'} size={30} color={colors.yellow}></Icon>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>{props.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
