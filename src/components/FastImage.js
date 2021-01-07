import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {colors} from '../utils/Theme';

export default function CustomFastImage(props) {
  return (
    <FastImage
      style={{width: 200, height: 200}}
      resizeMode={
        props.cover
          ? FastImage.resizeMode.cover
          : props.stretch
          ? FastImage.resizeMode.stretch
          : FastImage.resizeMode.contain
      }
      {...props}
    />
  );
}
