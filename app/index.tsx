import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import products from '../assets/products.json'
import ProductListItem from '@/components/ProductListItem'
import { Button, ButtonText } from '@/components/ui/button'

export default function HomeScreen() {
  return (
    <View >
      <FlatList
        data={products}
        numColumns={2}
        contentContainerClassName='gap-2'
        columnWrapperClassName='gap-2'
        className=' pt-2'
        renderItem={({ item}) => (<ProductListItem product={item} />)}
      />
    </View>
  )
}
