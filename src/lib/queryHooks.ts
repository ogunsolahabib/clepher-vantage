'use client';
import { UseQueryOptions, useQuery } from "react-query"
import { API_URL, API_KEY } from "./constants";

interface QueryParams {
    function: string;
    [key: string]: any;
}

export const useReactQueryFetch = (queryParams: QueryParams, state?: any, options?: Omit<UseQueryOptions<any, any, any, any[]>, "queryKey" | "queryFn"> | undefined) => {
    queryParams.apikey = `${API_KEY}`;
    let URL = `${API_URL}`;
    if (queryParams) {
        // remove undefined values

        let queryString = Object.keys(queryParams)
            .filter(key => queryParams[key] !== undefined).map(key => {
                return encodeURIComponent(key) + '=' + encodeURIComponent(queryParams[key]);
            }).join('&');

        URL = URL + '?' + queryString
    }

    return useQuery([`${queryParams.function}`, state], async (): Promise<any> => {
        return fetch(URL).then(res => res.json())
    }, options)
}