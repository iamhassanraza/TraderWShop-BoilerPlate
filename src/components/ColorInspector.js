import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors, text, metrics} from '../utils/Theme';

export default function ColorInspector(props) {
  const [selectedSize, setselectedSize] = useState(props.arr[0]);
  const size = 25;
  return (
    <View style={{height: 80}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          marginVertical:'3%'
        }}>
        <Text style={text.subheading}>Color:</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
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
              flex: 1,
              borderLeftWidth: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: size + 10,
                height: size + 10,
                borderRadius: (size + 10) / 2,
                justifyContent: 'center',
                borderWidth: selectedSize === val ? 0.5 : 0,
                borderColor: colors.grey,
                alignItems: 'center',
                backgroundColor:
                  selectedSize === val ? colors.lightGrey : 'white',
              }}>
              <View
                style={{
                  width: size,
                  height: size,
                  borderRadius: size / 2,
                  backgroundColor: val,
                }}></View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
