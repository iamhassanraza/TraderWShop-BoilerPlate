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
import CategoryCard from '../components/AppSpecific/CategoryCart';
import data from '../data';
import {useSelector} from 'react-redux';

import {colors, commonstyles, metrics} from '../utils/Theme';

export default function AllCateogries() {
  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header title={'Favourites'}></Header>
      <VerticalList
        scrollEnabled={true}
        data={data.category}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => Navigator.navigate('ProductDetail', {item})}
            style={commonstyles.VerticalListContainer}>
            <CategoryCard item={item}></CategoryCard>
          </TouchableOpacity>
        )}></VerticalList>
    </View>
  );
}

const styles = StyleSheet.create({});
