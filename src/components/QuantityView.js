import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {metrics, colors} from '../utils/Theme';
export default function QuantityView(props) {
  return (
    <View style={styles.quantityView}>
      <TouchableOpacity
        onPress={props.onMinus}
        style={{
          ...styles.iconView,
          backgroundColor: 'white',
          borderWidth: 1,
          borderColor: colors.grey,
        }}>
        <Icon name="remove" style={{...styles.icon, color: 'black'}} />
      </TouchableOpacity>
      <Text style={styles.quantity}>{props.value}</Text>
      <TouchableOpacity onPress={props.onAdd} style={styles.iconView}>
        <Icon name="add" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  quantity: {
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: metrics.defaultMargin,
    marginTop: 10,
  },
  iconView: {
    width: 30,
    height: 30,
    borderRadius: 25,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
    color: 'white',
  },
});
