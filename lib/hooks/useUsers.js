import axios from "axios";
import { useEffect, useState } from "react";

export default function useUsers() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [result, setResult] = useState();

    useEffect(() => {
        async function requestFetch() {
            try {
                setLoading(true);
                setError(false);

                const response = await axios.get("https://dummyjson.com/users");

                setResult(response.data);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError(true);
                console.log(err);
            }
        }
        requestFetch();
    }, []);

    return { loading, error, result };
}
