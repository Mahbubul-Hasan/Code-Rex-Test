/* eslint-disable prettier/prettier */
import { Box, Text, useColorModeValue, VStack } from "@chakra-ui/react";

export default function PostCart({ post }) {
    return (
        <Box
            bg={useColorModeValue("white", "gray.800")}
            rounded="lg"
            shadow="lg"
            position="relative"
            p="4"
        >
            <VStack spacing="2" align="stretch">
                <Text
                    fontSize="2xl"
                    fontWeight="semibold"
                    as="h4"
                    // lineHeight="tight"
                    // isTruncated
                >
                    {post?.title}
                </Text>

                <Text fontSize="sm" color="gray.500">
                    {post?.body}
                </Text>
            </VStack>
        </Box>
    );
}
