import { Button, ButtonText } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";
import React, { useState } from "react";
import { HStack } from "@/components/ui/hstack";
import { useMutation } from "@tanstack/react-query";
import { login, signup } from "@/api/auth";
import { useAuth } from "@/store/authStore";
import { Redirect } from "expo-router";

export default function LoginScreen() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const setUser = useAuth(s => s.setUser);
    const setToken = useAuth(s => s.setToken);
    const isLoggedIn = useAuth(s => !!s.token);
    
    const loginMutation = useMutation({ 
        mutationFn: () => login(email, password),
        onSuccess: (data: {user: string, token: string}) => {
            if (data.user && data.token){
                setUser(data.user);
                setToken(data.token);
            }
            console.log('success')
        },
        onError: () => {
            console.log('error')
        }
    })
    const signupMutation = useMutation({ 
        mutationFn: () => signup(email, password),
        onSuccess: (data: {user: string, token: string}) => {
            if (data.user && data.token){
                setUser(data.user);
                setToken(data.token);
            }
            console.log('success')
            console.log('success')
        },
        onError: () => {
            console.log('error')
        }
    })

    const handleState = () => {
        setShowPassword((showState) => {
            return !showState;
        });
    };

    if (isLoggedIn){
        return <Redirect href={'/'}/>
    }
    return (
        <FormControl 
        isInvalid={loginMutation.error || signupMutation.error ? true : false}
        className="p-4 border rounded-lg border-outline-300">
            <VStack space="xl">
                <Heading className="text-typography-900">Login</Heading>
                <VStack space="xs">
                    <Text className="text-typography-500">Email</Text>
                    <Input className="min-w-[250px]">
                        <InputField value={email} onChangeText={setEmail} type="text" />
                    </Input>
                </VStack>
                <VStack space="xs">
                    <Text className="text-typography-500">Password</Text>
                    <Input className="text-center">
                        <InputField value={password} onChangeText={setPassword} type={showPassword ? "text" : "password"} />
                        <InputSlot className="pr-3" onPress={handleState}>
                            <InputIcon
                                as={showPassword ? EyeIcon : EyeOffIcon}
                            />
                        </InputSlot>
                    </Input>
                </VStack>
                <HStack className="gap-2" space="sm">
                    <Button
                        className="flex-1"
                        variant="outline"
                        onPress={() => signupMutation.mutate()}
                    >
                        <ButtonText className="">Sign up</ButtonText>
                    </Button>
                    <Button
                        className="flex-1"
                        onPress={() => loginMutation.mutate()}
                    >
                        <ButtonText className="text-typography-0">Sign in</ButtonText>
                    </Button>
                </HStack>
            </VStack>
        </FormControl>
    );
}