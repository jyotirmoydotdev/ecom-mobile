import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Icon } from '@/components/ui/icon';
import { LogOut, ShoppingCart, UserRound } from 'lucide-react-native';
import { useCart } from '@/store/cartStore';
import { useAuth } from '@/store/authStore';

const queryClient = new QueryClient()

export default function RootLayout() {
    const item = useCart((state: any) => state.items);
    const setUser = useAuth(s => s.setUser);
    const setToken = useAuth(s => s.setToken);
    const isLoggedIn = useAuth(s => !!s.token);
    return (
        <QueryClientProvider client={queryClient}>
            <GluestackUIProvider mode="light">
                <Stack
                    screenOptions={{
                        headerRight: () => (
                            <View className='flex-row '>
                                <Link href={"/cart"} className='p-3' asChild>
                                    <Pressable className='flex-row items-center gap-2'>
                                        <Icon as={ShoppingCart} />
                                        <Text>{item.length}</Text>
                                    </Pressable>
                                </Link>
                                {isLoggedIn ? (
                                    <Pressable
                                    onPress={()=>{
                                        setUser(null);
                                        setToken(null);
                                    }}
                                    className='flex-row items-center gap-2 p-3'>
                                        <Icon as={LogOut} />
                                    </Pressable>
                                ) : (
                                    <Link href={"/login"} className='p-3' asChild>
                                        <Pressable className='flex-row items-center gap-2'>
                                            <Icon as={UserRound} />
                                        </Pressable>
                                    </Link>
                                )}
                            </View>
                        ),
                    }}
                >
                    <Stack.Screen name="index" options={{
                        title: "Amazon",
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