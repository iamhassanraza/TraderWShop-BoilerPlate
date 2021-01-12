import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import data from '../data';
import {Header, SearchBar, VerticalList, ItemCard} from '../components';
import {colors, metrics, text, commonstyles} from '../utils/Theme';
import Navigator from '../utils/Navigator';
export default function Search() {
  const [list, setlist] = useState(data.products);
  const [searchQueryText, setsearchQueryText] = useState('');

  useEffect(() => {
    var updated_list = data.products.filter((val) =>
      val.productname.toLowerCase().includes(searchQueryText.toLowerCase()),
    );

    setlist(updated_list);
  }, [searchQueryText]);

  return (
    <SafeAreaView style={{backgroundColor: colors.background, flex: 1}}>
      <Header title={'Search'}></Header>
      <View style={{paddingHorizontal: metrics.defaultMargin}}>
        <SearchBar
          onChangeText={(value) => setsearchQueryText(value)}></SearchBar>
        <View style={{margin: metrics.defaultMargin}}>
          <Text style={text.heading}>
            <Text style={{fontWeight: '400', color: 'black'}}>Found </Text>
            {list.length} Results
          </Text>
        </View>

        <VerticalList
          scrollEnabled={true}
          data={list}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => Navigator.navigate('ProductDetail', {item})}
              style={commonstyles.VerticalListContainer}>
              <ItemCard item={item}></ItemCard>
            </TouchableOpacity>
          )}></VerticalList>
      </View>
    </SafeAreaView>
  );
}
