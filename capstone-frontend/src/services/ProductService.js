import axios from 'axios';

const baseUrl = 'http://localhost:3500/';

export async function getProducts() {
    const { data } = await axios.get(`${baseUrl}products`);
    return data;
}
