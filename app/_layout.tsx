import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function RootLayout() {
    return (
        <GluestackUIProvider mode="light">
            <Stack>
                <Stack.Screen name="index" options={{
                    title: "Home"
                }}  />
                <Stack.Screen name="product" options={{
                    title: "Products Details"
                }}  />
            </Stack>
        </GluestackUIProvider>
    );
}