import { useQuery } from "react-query";
import axios from "axios";

const request = async (
    searchQuery,
    searchApi = 'http://localhost:3000/mock.json',
    domain = 'anyclip.com'
) => {
    const { data } = await axios.post(
        searchApi, {
            query: searchQuery,
            domain
        }
    );

    return data;
};

export default function useSearch(searchQuery, searchApi, domain) {
    return useQuery(["query", searchQuery], () => request(searchQuery, searchApi, domain), {
        enabled: Boolean(searchQuery),
    });
}
