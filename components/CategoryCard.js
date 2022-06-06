import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Link } from '@react-navigation/native';
import { w } from './../constants'

const CategoryCard = (props) => {
  const [load, setLoad] = React.useState(true)
  const { container, sub, cover, header1 } = styles;
  const { data, namescreen } = props
  const { icon, name, id, is_leaf } = data
  let numberscreen = Number(namescreen) + 1
  if (is_leaf == 1) {
    return (
      <View style={container}>
        <Link to={{ screen: "Products", params: { id: { id }, title: { name } } }} >
          <View style={sub}>
            <Image style={cover} source={{ uri: icon }} />
          </View>
          <Text style={header1} >{name.toUpperCase()}</Text>
        </Link>
      </View>
    );
  }
  else {
    return (
      <View style={container}>
        <Link to={{ screen: "level" + String(numberscreen), params: { id: { id }, title: { name } } }} >
          <View style={sub}>
            <Image style={cover} source={{ uri: icon }} />
          </View>
          <Text style={header1} >{name.toUpperCase()}</Text>
        </Link>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: w / 2.4,
    paddingVertical: 10
  },
  sub: {
    shadowColor: '#000',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4
  },
  header1: {
    paddingTop: 10,
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center'
  },
  cover: {
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 10
  }
})

export default CategoryCard;