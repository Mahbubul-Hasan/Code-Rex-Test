import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Text,
    VStack,
    Wrap,
    WrapItem,
} from "@chakra-ui/react";
import useUsers from "@/lib/hooks/useUsers";
import { useEffect, useState } from "react";
import UserCart from "./UserCart";
import SpinnerComponent from "../Spinner/SpinnerComponent";

export default function UserListSection() {
    const [data, setData] = useState({});

    const { loading, error, result } = useUsers("https://dummyjson.com/users");

    useEffect(() => {
        if (result && result.users) {
            setData(result?.users);
        }
    }, [result]);

    return (
        <Box bg="white">
            <Container maxW="8xl" py={{ base: 8, md: 16 }}>
                <VStack spacing="8" align="stretch">
                    <Heading as="h2" textTransform="uppercase">
                        User List
                    </Heading>

                    {loading && <SpinnerComponent />}
                    {error && <SpinnerComponent />}
                    {data && (
                        <SimpleGrid
                            columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
                            spacing={10}
                        >
                            {data?.length &&
                                data?.map((item) => (
                                    <UserCart key={item.id} user={item} />
                                ))}
                        </SimpleGrid>
                    )}
                </VStack>
            </Container>
        </Box>
    );
}
