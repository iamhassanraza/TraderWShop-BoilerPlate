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
} from '../components';
import Navigator from '../utils/Navigator';
import ItemCard from '../components/AppSpecific/ItemCard';
import data from '../data';

import {colors, commonstyles, metrics} from '../utils/Theme';
export default function Home() {
  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header showCart hideLeft title={'Title'}></Header>

      <ScrollView
        style={{
          marginHorizontal: metrics.defaultMargin,
        }}>
        <Text style={commonstyles.xxlText}>Fashion Shop</Text>
        <Text style={{...commonstyles.smallText, fontWeight: '500'}}>
          Get Popular Fashion at Home
        </Text>
        <SearchBar disable></SearchBar>
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
              return (
                <View
                  style={{
                    width: 200,
                    height: 200,
                    backgroundColor: 'white',
                    marginRight: 20,
                    borderRadius: 20,
                    padding: '10%',
                  }}>
                  <View style={{flex: 4}}>
                    <FastImage
                      style={{width: '100%', height: '100%'}}
                      source={{
                        uri:
                          'https://lh3.googleusercontent.com/proxy/cvsHCI6mEHR9LsPZZLA4TK1AByLUssrraP-vaR95mmTyewua4VYGN305eH2kxgExaP_Ynb9uPkF5YopFVdlE-UIStOBXDtTL2khq3OweYwf0Mp9OBB9Y3TOlG7iazTVdQxaN6Q',
                      }}></FastImage>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 20}}>{item.name}</Text>
                  </View>
                </View>
              );
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
