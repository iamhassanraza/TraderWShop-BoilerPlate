import React, {useState, useEffect} from 'react';
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

export default function AllProductss(props) {
  const {show} = props.route.params;

  const [allProducts, setAllProducts] = useState([]);
  const [title, settitle] = useState('');

  useEffect(() => {
    if (show === 'category') {
      settitle(props.route.params.item.category);
      setAllProducts(
        data.products.filter(
          (val) => val.categoryid === props.route.params.item.id,
        ),
      );
    } else {
      settitle('All Products');
      setAllProducts(data.products);
    }
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <Header title={title}></Header>
      <VerticalList
        scrollEnabled={true}
        data={allProducts}
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
