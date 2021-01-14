import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {metrics, colors} from '../utils/Theme';
import {Button} from '../components';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Navigator from '../utils/Navigator';
import {emptyCart} from '../store/Cart';
import {useDispatch} from 'react-redux';

export default function Success() {
  const dispatch = useDispatch();
  return (
    <SafeAreaView
      style={{
        justifyContent: 'center',
        paddingHorizontal: metrics.defaultMargin,
        flex: 1,
      }}>
      <View
        style={{
          width: metrics.width * 0.35,
          height: metrics.width * 0.35,
          backgroundColor: colors.secondary,
          borderRadius: metrics.width * 0.2,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginBottom: 20,
        }}>
        <Icon name="check" color={colors.primary} size={58} />
      </View>
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'center',
          marginVertical: 20,
        }}>
        Thank you for placing order.
      </Text>

      <Button
        text="Return to Home page"
        showIcon={false}
        style={{marginVertical: 20}}
        onPress={() => {
          Navigator.navigateAndReset('Home');
          dispatch(emptyCart());
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
