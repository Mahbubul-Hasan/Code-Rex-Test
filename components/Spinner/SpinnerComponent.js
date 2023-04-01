import { Center, Spinner, VStack } from "@chakra-ui/react";
import React from "react";

export default function SpinnerComponent() {
    return (
        <Center>
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        </Center>
    );
}
