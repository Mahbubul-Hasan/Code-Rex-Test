/* eslint-disable prettier/prettier */
import {
    Avatar,
    AvatarGroup,
    Box,
    Icon,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function UserCart({ user }) {
    return (
        <Box
            bg={useColorModeValue("white", "gray.800")}
            maxW="sm"
            rounded="lg"
            shadow="lg"
            position="relative"
        >
            <Link as={NextLink} href={`/users/${user?.id}`}>
                <Image
                    src={user?.image}
                    alt={user?.firstName}
                    roundedTop="lg"
                />
            </Link>

            <Box p="3">
                <VStack spacing="2" align="stretch">
                    <Link as={NextLink} href={`/users/${user?.id}`}>
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated
                        >
                            {user?.firstName + " " + user?.lastName}
                        </Box>
                    </Link>

                    <Text fontSize="sm" color="gray.500" noOfLines="1">
                        <Text as="span" fontWeight="bold" color="black" mr="2">
                            Email:
                        </Text>
                        <Text as="span">{user?.email}</Text>
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                        <Text as="span" fontWeight="bold" color="black" mr="2">
                            Phone:
                        </Text>
                        <Text as="span">{user?.phone}</Text>
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                        <Text as="span" fontWeight="bold" color="black" mr="2">
                            Blood:
                        </Text>
                        <Text as="span">{user?.bloodGroup}</Text>
                    </Text>
                </VStack>
            </Box>
        </Box>
    );
}
