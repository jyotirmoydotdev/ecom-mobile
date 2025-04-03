import { View, Text, StyleSheet, FlatList, useWindowDimensions, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
// import products from '../assets/products.json'
import ProductListItem from '@/components/ProductListItem'
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input"
import { SearchIcon } from "@/components/ui/icon"
import { useBreakpointValue } from '@/components/ui/utils/use-break-point-value'
import { listProducts } from '@/api/products'
import { useQuery } from '@tanstack/react-query'

export default function HomeScreen() {
  const numColumn = useBreakpointValue({
    default: 2,
    sm: 3,
    xl: 4,
  });

  const {data, isLoading, error} = useQuery({
    queryKey: ['products'],
    queryFn: listProducts,
  });

  useEffect(() => {
    listProducts();
  }, [])
  
  if (isLoading){
    return <ActivityIndicator/>
  }

  if (error) {
    return <Text>{error.stack}</Text>
  }
  
  return (
    <View >
      <Input className='my-2 mx-4 bg-white rounded-xl border-background-100' >
        <InputSlot className="pl-3 ">
          <InputIcon as={SearchIcon} />
        </InputSlot>
        <InputField placeholder="Search Products..." />
      </Input>
      <FlatList
        data={data}
        // @ts-ignore
        numColumns={numColumn}
        contentContainerClassName='gap-2 max-w-[960px] mx-auto w-full'
        columnWrapperClassName='gap-2'
        className=' pt-2'
        renderItem={({ item }) => (<ProductListItem product={item} />)}
      />
    </View>
  )
}
