import { View, FlatList } from 'react-native'
import React from 'react'
import { useCart } from '@/store/cartStore';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Button, ButtonText } from '@/components/ui/button';

export default function cart() {
  const item = useCart((state:any) => state.items);
  const resetCart = useCart((state:any)=>state.resetCart);
  const onCheckout = async () => {
    resetCart()
  }
  if (item.length === 0) {
    return (
      <View className='flex-1 justify-center items-center'>
        <Text className='text-lg font-semibold'>Your cart is empty</Text>
      </View>
    )
  }
  return (
    <FlatList
    data={item}
    contentContainerClassName='gap-2 max-w-[960px] w-full mx-auto'
    renderItem={({ item }) => (
      <HStack className='bg-white p-3'>
        <VStack space='sm'>
        <Text>{item.product.name}</Text>
        <Text>{item.product.price}</Text>
        </VStack>
        <Text className='ml-auto'>{item.quantity}</Text>
      </HStack>
    )}
    ListFooterComponent={() => (
      <Box className='bg-white p-3'>
        <Text className='text-lg font-semibold'>Total: {item.reduce((acc:any, curr:any) => acc + (curr.product.price * curr.quantity), 0)}</Text>
        <Button onPress={onCheckout}>
          <ButtonText>Checkout</ButtonText>
        </Button>
      </Box>
    )}
    />
  )
}