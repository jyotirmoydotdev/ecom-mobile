import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Icon } from '@/components/ui/icon';
import { ShoppingCart } from 'lucide-react-native';
import { useCart } from '@/store/cartStore';

const queryClient = new QueryClient()

export default function RootLayout() {
    const item = useCart((state:any) => state.items);
    return (
        <QueryClientProvider client={queryClient}>
            <GluestackUIProvider mode="light">
                <Stack
                    screenOptions={{
                        headerRight: () => (
                            <View style={{ padding: 14 }}>
                                <Link href={"/cart"} asChild>
                                    <Pressable className='flex-row items-center gap-2'>
                                        <Icon as={ShoppingCart} />
                                        <Text>{item.length}</Text>
                                    </Pressable>
                                </Link>
                            </View>
                        ),
                    }}
                >
                    <Stack.Screen name="index" options={{
                        title: "Home",
                    }} />
                    <Stack.Screen name="product" options={{
                        title: "Products",
                        headerBackTitle: "Back",
                    }} />
                </Stack>
            </GluestackUIProvider>
        </QueryClientProvider>
    );
}