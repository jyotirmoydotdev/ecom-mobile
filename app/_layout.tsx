import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <GluestackUIProvider mode="light">
                <Stack>
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