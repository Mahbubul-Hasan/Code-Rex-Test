import PostListSection from "@/components/Post/PostListSection";
import SpinnerComponent from "@/components/Spinner/SpinnerComponent";
import UserCart from "@/components/User/UserCart";
import useUser from "@/lib/hooks/useUser";
import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function UserDetails() {
    const [data, setData] = useState();

    const router = useRouter();

    const { loading, error, result } = useUser(router?.query?.id);

    useEffect(() => {
        if (result) {
            setData(result);
        }
    }, [result]);

    return (
        <>
            <Head>
                <title>Code Rex Test</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxW="8xl" py={{ base: 8, md: 16 }}>
                {loading && <SpinnerComponent />}
                {data && (
                    <>
                        <UserCart key={data?.id} user={data} />
                        <PostListSection userID={router?.query?.id} />
                    </>
                )}
            </Container>
        </>
    );
}
