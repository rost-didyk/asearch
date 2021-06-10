import { useQuery } from "react-query";
import axios from "axios";

const searchUrl = 'http://localhost:3000/mock.json';

const request = async (
    searchQuery
) => {
    const { data } = await axios.get(
        `${searchUrl}?query=${searchQuery}`
    );

    return data;
};

export default function useSearch(searchQuery) {
    return useQuery(["query", searchQuery], () => request(searchQuery), {
        enabled: Boolean(searchQuery),
    });
}
