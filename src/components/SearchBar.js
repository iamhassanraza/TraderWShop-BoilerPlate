import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {metrics, colors} from '../utils/Theme';

import Icon from 'react-native-vector-icons/AntDesign';

const height = metrics.height / 18;

export default function SearchBar(props) {
  const placeholder = props.placeholder ? props.placeholder : 'Search the cloths you need';
  return (
    <View style={[styles.container, props.containerStyle]}>
      <View style={styles.iconView}>
        <Icon name="search1" size={height / 2.5} color={colors.grey}></Icon>
      </View>
      {!props.disable ? (
        <TextInput
          autoFocus={true}
          placeholder={placeholder}
          placeholderTextColor={colors.grey}
          style={{...styles.textInput}}
          {...props}
        />
      ) : (
        <TouchableWithoutFeedback
          onPress={() => {
            if (props.disable && props.onPress) {
              props.onPress();
            }
          }}>
          <View style={{...styles.textInput, justifyContent: 'center'}}>
            <Text style={{color: 'grey'}}>{placeholder}</Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: metrics.smallMargin,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // paddingHorizontal:5,
  },
  iconView: {
    height: height,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    width: 50,
    // backgroundColor: colors.primary,
  },
  textInput: {
    flex: 7,
    height: height,
    backgroundColor: 'white',
    fontSize: 16,
    paddingHorizontal: 15,

    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
  },
});
