import { View } from 'react-native'
import React from 'react'
import { useLocalSearchParams, Link } from 'expo-router'
import products from "@/assets/products.json";

import { Text } from '@/components/ui/text'
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    <View>
      <Text>Product not found</Text>
    </View>
  }
  return (
    <Card className="p-5 rounded-lg max-w-[560px] flex-1 justify-between">
      <Link href={`/product/${product?.id}`} className='pb-2'>
        <Image
          source={{
            uri: product?.image,
          }}
          className="mb-6 h-[240px] py-5 w-full rounded-md "
          alt={`${product?.name} image`}
          resizeMode="contain"
        />
        <Text className="text-sm font-normal mb-2 text-typography-700">
          {product?.name}
        </Text>
        <VStack className="mb-6">
          <Heading size="md" className="mb-4">
            $ {product?.price}
          </Heading>
          <Text size="sm">
            {product?.description}
          </Text>
        </VStack>
      </Link>
      <Box className="flex-col sm:flex-row">
        <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
          <ButtonText className=' rounded-lg' size="sm">Add to cart</ButtonText>
        </Button>
        <Button
          variant="outline"
          className="px-4 py-2 border-outline-300 sm:flex-1"
        >
          <ButtonText size="sm" className="text-typography-600">
            Wishlist
          </ButtonText>
        </Button>
      </Box>
    </Card>
  )
}