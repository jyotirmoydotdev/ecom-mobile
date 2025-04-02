import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import products from '../assets/products.json'
import ProductListItem from '../components/ProductListItem'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        style={{ flex: 1, flexDirection:'row', gap: 5 }}
        renderItem={({ item}) => (<ProductListItem product={item} />)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 10
  }
})