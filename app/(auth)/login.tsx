import { Button, ButtonText } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";
import React from "react";
import { HStack } from "@/components/ui/hstack";

export default function LoginScreen() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleState = () => {
        setShowPassword((showState) => {
            return !showState;
        });
    };
    return (
        <FormControl className="p-4 border rounded-lg border-outline-300">
            <VStack space="xl">
                <Heading className="text-typography-900">Login</Heading>
                <VStack space="xs">
                    <Text className="text-typography-500">Email</Text>
                    <Input className="min-w-[250px]">
                        <InputField type="text" />
                    </Input>
                </VStack>
                <VStack space="xs">
                    <Text className="text-typography-500">Password</Text>
                    <Input className="text-center">
                        <InputField type={showPassword ? "text" : "password"} />
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
                        onPress={() => { }}
                    >
                        <ButtonText className="text-typography-0">Sign up</ButtonText>
                    </Button>
                    <Button
                        className="flex-1"
                        onPress={() => { }}
                    >
                        <ButtonText className="text-typography-0">Sign in</ButtonText>
                    </Button>
                </HStack>
            </VStack>
        </FormControl>
    );
}