import { Pressable, View } from 'react-native'
import React from 'react'
import { Card } from './ui/card';
import { Image } from './ui/image';
import { VStack } from './ui/vstack';
import { Heading } from './ui/heading';
import { Text } from './ui/text';
import { Box } from './ui/box';
import { Button, ButtonText } from './ui/button';
import { Link } from 'expo-router';

export default function ProductListItem({ product }: { product: any }) {
    return (
        <Link href={`/product/${product.id}`} asChild>
            <Pressable className='flex-1'>
                <Card className="p-5 rounded-lg max-w-[360px] flex-1 ">
                    <Image
                        source={{
                            uri: product.image,
                        }}
                        className="mb-6 h-[180px] py-5 w-full rounded-md "
                        alt={`${product.name} image`}
                        resizeMode="contain"
                    />
                    <Text className="text-sm font-normal mb-2 text-typography-700">
                        {product.name}
                    </Text>
                    <Heading size="md" className="mb-4">
                        $ {product.price}
                    </Heading>
                </Card>
            </Pressable>
        </Link>
    );
}