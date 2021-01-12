import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  SearchBar,
  Header,
  HorizontalList,
  SizeInspector,
  ColorInspector,
  FastImage,
  Rating,
  VerticalList,
  Input,
} from '../components';
import Navigator from '../utils/Navigator';
import ItemCard from '../components/AppSpecific/ItemCard';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors, metrics, fonts, text} from '../utils/Theme';

import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';

export default function Checkout(props) {
  const cartItems = useSelector((state) => state.Cart.items);

  console.log(cartItems, 'cart items');
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [email, setemail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [address, setaddress] = useState('');

  const toArray = (obj) => {
    const arr = [];
    for (const [key, value] of Object.entries(obj)) {
      arr.push(value);
    }
    return arr;
  };

  const cartArray = toArray(cartItems);

  if (cartArray.length === 0) {
    return (
      <View style={{flex: 1}}>
        <Header title={'Checkout'}></Header>
        <FastImage
          style={{width: '100%', height: '100%'}}
          source={{
            uri:
              'https://www.thesmokeyvapes.com/assets/front/images/empty-cart.png',
          }}></FastImage>
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header title={'title'}></Header>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={{
          flex: 1,
          paddingHorizontal: metrics.defaultMargin,
        }}>
        {/* <ListItem
          data={this.props.cart.items}
          renderItem={({item}) => this.renderItem(item)}></ListItem> */}

        <View
          style={{
            backgroundColor: colors.lightGrey,
            padding: '3%',
            borderRadius: 10,
            paddingVertical: '5%',
          }}>
          <View style={styles.info}>
            <Text style={styles.title}>SubTotal</Text>
            <Text style={styles.text}>
              {/* ${this.props.cart.totalPrice.toFixed(2)} */}
            </Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Payment Mode</Text>
            <Text style={styles.text}>Cash on Delivery</Text>
          </View>
          <View style={{...styles.info, marginTop: '5%'}}>
            <Text style={{...text.subheading}}>Total</Text>
            <Text style={{...text.subheading}}>
              {/* ${this.props.cart.totalPrice.toFixed(2)} */}
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            padding: metrics.defaultMargin,
            // shadowColor: '#000',
            // shadowOffset: {
            //   width: 0,
            //   height: 2,
            // },
            // shadowOpacity: 0.25,
            // shadowRadius: 3.84,
            marginVertical: 20,
          }}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 20,
              marginBottom: 20,
            }}>
            Personal Info
          </Text>
          <Input
            placeholder="First Name"
            label="First name"
            value={fname}
            onChangeText={(text) => {
              setfname(text);
            }}
          />
          <Input
            placeholder="Last Name"
            label="Last name"
            value={lname}
            onChangeText={(text) => {
              setlname(text);
            }}
          />

          <Input
            placeholder="Email"
            label="Email"
            keyboardType={'email-address'}
            value={email}
            onChangeText={(text) => {
              setemail(text);
            }}
          />
          <Input
            placeholder="Mobile Number"
            label="Mobile No."
            value={phoneNumber}
            onChangeText={(text) => {
              setphoneNumber(text);
            }}
            keyboardType={'phone-pad'}
          />
          <Input
            placeholder="Complete address"
            label="Complete Address"
            value={address}
            onChangeText={(text) => {
              setaddress(text);
            }}
            multiline={true}
            style={{height: 100}}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: fonts.primaryBold,
    fontSize: 28,
    marginVertical: metrics.defaultMargin,
  },

  iconView: {
    backgroundColor: 'rgb(255,255,255)',
    width: 50,
    marginRight: '5%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: colors.primary,
  },
  icon: {
    fontSize: 34,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.primaryBold,
    fontSize: 16,
  },
  text: {
    fontFamily: fonts.secondary,
    fontSize: 14,
  },

  quantityView: {
    alignItems: 'center',
    borderRadius: 40,
    flexDirection: 'row',
    right: 0,
    bottom: 0,
  },
  icon: {
    fontSize: 28,
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 2,
    color: colors.secondary,
  },
});
