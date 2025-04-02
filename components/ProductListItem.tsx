import { View, Text } from 'react-native'
import React from 'react'

export default function ProductListItem({product}) {
  return <Text style={{fontSize:24}}>{product.name}</Text>;
}