import axios from "axios";
import { useEffect, useState } from "react";

export default function usePosts(id) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [result, setResult] = useState();

    useEffect(() => {
        async function requestFetch() {
            try {
                setLoading(true);
                setError(false);

                const response = await axios.get(
                    `https://dummyjson.com/users/${id}/posts`
                );

                setResult(response.data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError(true);
                console.log(err);
            }
        }
        requestFetch();
    }, [id]);

    return { loading, error, result };
}
