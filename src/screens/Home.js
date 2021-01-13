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
import CategoryCard from '../components/AppSpecific/CategoryCart';
import data from '../data';

import {colors, commonstyles, metrics} from '../utils/Theme';
export default function Home() {
  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header
        rightCompnent={() => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 15,
            }}>
            <AddToFav
              onPress={() => Navigator.navigate('Favourites')}
              size={25}
              disabled></AddToFav>
            <View style={{marginLeft: 1}}>
              <CartIcon
                onPress={() => Navigator.navigate('Checkout')}></CartIcon>
            </View>
          </View>
        )}
        hideLeft
        title={'Title'}></Header>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginHorizontal: metrics.defaultMargin,
        }}>
        <Text style={commonstyles.xxlText}>Fashion Shop</Text>
        <Text style={{...commonstyles.smallText, fontWeight: '500'}}>
          Get Popular Fashion at Home
        </Text>
        <SearchBar
          onPress={() => Navigator.navigate('Search')}
          disable></SearchBar>
        <View
          style={{
            ...commonstyles.spaceBetween,
          }}>
          <Text style={{...commonstyles.smallText}}>Categories</Text>
          <Text
            style={[
              commonstyles.xsText,
              {color: colors.primary, fontWeight: 'bold'},
            ]}>
            See all
          </Text>
        </View>
        <View>
          <HorizontalList
            data={[{name: 'hassan'}, {name: 'jaff'}, {name: 'sad'}]}
            renderItem={({item}) => {
              return <CategoryCard item={item}></CategoryCard>;
            }}
          />
        </View>
        <View
          style={{
            ...commonstyles.spaceBetween,
          }}>
          <Text style={{...commonstyles.smallText}}>Popular Fashion</Text>
          <Text
            style={[
              commonstyles.xsText,
              {color: colors.primary, fontWeight: 'bold'},
            ]}>
            See all
          </Text>
        </View>

        <VerticalList
          scrollEnabled={false}
          data={data.products}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => Navigator.navigate('ProductDetail', {item})}
              style={commonstyles.VerticalListContainer}>
              <ItemCard item={item}></ItemCard>
            </TouchableOpacity>
          )}></VerticalList>
      </ScrollView>
    </View>
  );
}
