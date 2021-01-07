import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, text, metrics} from '../utils/Theme';

export default function SizeInspector(props) {
  const [selectedSize, setselectedSize] = useState(props.arr[0]);
  return (
    <View style={{height: 80}}>
      <View
        style={{
          marginBottom: 10,
          borderColor: colors.borderColor,
          justifyContent: 'center',
        }}>
        <Text style={text.subheading}>Size (US):</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        {props.arr.map((val, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            onPress={() => {
              setselectedSize(val);
              if (props.getSelectedValue) {
                props.getSelectedValue(val);
              }
            }}
            style={{
              borderWidth: 1,
              width: 50,
              height: 50,
              borderColor: colors.borderColor,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: '3%',
              backgroundColor:
                selectedSize === val ? colors.lightGrey : 'white',
            }}>
            <Text
              style={[
                text.subheading,
                {color: selectedSize === val ? colors.primary : 'black'},
              ]}>
              {val}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
