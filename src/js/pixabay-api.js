
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const keyApi = '42512842-e518c28c0b42a0fb4c46a85d3';

export async function imageSearch(query, pageNum) {
const queryParams = new URLSearchParams({
    key: keyApi,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: false,
    per_page: 15,
    page: pageNum,
});

    const response = await axios.get('', { params: queryParams });
return response.data;
}