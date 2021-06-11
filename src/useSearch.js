import { useQuery } from "react-query";
import axios from "axios";

const request = async (
    searchQuery,
    searchApi = 'http://localhost:3000/mock.json'
) => {
    const { data } = await axios.post(
        searchApi, {
            query: searchQuery,
            domain: 'www.anyclip.com'
        }
    );

    return data;
};

export default function useSearch(searchQuery, searchApi) {
    return useQuery(["query", searchQuery], () => request(searchQuery, searchApi), {
        enabled: Boolean(searchQuery),
    });
}
