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
import { useEffect, useState } from "react";
import SpinnerComponent from "../Spinner/SpinnerComponent";
import PostCart from "./PostCart";
import usePosts from "@/lib/hooks/usePosts";

export default function PostListSection({ userID }) {
    const [data, setData] = useState({});

    const { loading, error, result } = usePosts(userID);

    useEffect(() => {
        if (result && result.posts) {
            setData(result?.posts);
        }
    }, [result]);

    return (
        <Box bg="white" py="8">
            <VStack spacing="8" align="stretch">
                <Heading as="h2" textTransform="uppercase">
                    Post List
                </Heading>

                {loading && <SpinnerComponent />}
                {error && <SpinnerComponent />}
                {data && (
                    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="8">
                        {data?.length &&
                            data?.map((item) => (
                                <PostCart key={item.id} post={item} />
                            ))}
                    </SimpleGrid>
                )}
            </VStack>
        </Box>
    );
}
