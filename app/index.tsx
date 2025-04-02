import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import products from '../assets/products.json'
import ProductListItem from '@/components/ProductListItem'
import { Button, ButtonText } from '@/components/ui/button'
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input"
import { SearchIcon } from "@/components/ui/icon"

export default function HomeScreen() {
  return (
    <View >
      <Input className='my-2 mx-4 bg-white rounded-xl border-background-100' >
        <InputSlot className="pl-3 ">
          <InputIcon as={SearchIcon} />
        </InputSlot>
        <InputField placeholder="Search Products..." />
      </Input>
      <FlatList
        data={products}
        numColumns={2}
        contentContainerClassName='gap-2'
        columnWrapperClassName='gap-2'
        className=' pt-2'
        renderItem={({ item }) => (<ProductListItem product={item} />)}
      />
    </View>
  )
}
