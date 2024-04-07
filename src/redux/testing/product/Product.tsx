import {View, Text, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const Product = props => {
  const product = props.product;

  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 30, padding: 5}}>{product.title} </Text>
      <Text style={{fontSize: 30, padding: 5}}>{product.price} </Text>
      <Text style={{fontSize: 30, padding: 5}}>{product.description} </Text>
      <Image
        style={{width: 100, height: 100, padding: 5, borderRadius: 5}}
        source={{uri: product.image}}
      />
      <TouchableOpacity
        style={{
          padding: 5,
        }}>
        <Text
          style={{
            fontSize: 30,
            backgroundColor: 'lightblue',
            padding: 5,
            borderWidth: 1,
            borderRadius: 20,
          }}>
          {product.button}{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Product;
