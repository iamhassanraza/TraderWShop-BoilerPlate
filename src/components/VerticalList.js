import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {metrics} from '../utils/Theme';

export default function VerticalList(props) {
  return (
    <View>
      <FlatList
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        {...props}
      />
    </View>
  );
}
