import React from 'react';
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
  AddToFav,
  CartIcon,
} from '../components';
import Navigator from '../utils/Navigator';
import ItemCard from '../components/AppSpecific/ItemCard';
import data from '../data';
import {useSelector} from 'react-redux';

import {colors, commonstyles, metrics} from '../utils/Theme';

export default function Favourites() {
  const favList = useSelector((state) => {
    console.log(state);
    let arr = [];
    let obj = state.Cart.favItems;
    Object.keys(obj).forEach(function (key) {
      arr.push(obj[key]);
    });
    return arr;
  });

  if (favList.length === 0) {
    return (
      <View style={{flex: 1}}>
        <Header title={'Favourites'}></Header>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={commonstyles.largeText}>No items Saved</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header title={'Favourites'}></Header>
      <VerticalList
        scrollEnabled={true}
        data={favList}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => Navigator.navigate('ProductDetail', {item})}
            style={commonstyles.VerticalListContainer}>
            <ItemCard item={item}></ItemCard>
          </TouchableOpacity>
        )}></VerticalList>
    </View>
  );
}

const styles = StyleSheet.create({});
