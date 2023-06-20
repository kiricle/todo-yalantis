import { useCallback, useEffect, useState } from 'react';

const useFetch = (url, options) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [isError, setIsError] = useState(false);

    const fetchData = useCallback(async () => {
        try {
            setIsError(false);
            setIsLoading(true);
            const response = await fetch(url, { ...options });
            if (!response.ok) {
                throw new Error('Request failed');
            }
            const { data } = await response.json();

            setData(data);
        } catch (error) {
            setIsError(true);
            setIsLoading(false);
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, [url, options]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { isLoading, data, isError };
};

export default useFetch;
