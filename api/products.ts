import axios from "axios";
import { apiurl } from "./utils";

const API_URL = apiurl();

export async function listProducts() {
    const res = await axios.get(`${API_URL}/products`);
    if (res.status !== 200) {
        throw new Error('Error: Failed to fetch products')
    }
    const data = await res.data;
    return data;
}

export async function getProduct(id: string) {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await axios.get(`${API_URL}/products/${Number(id)}`);
    if (res.status !== 200) {
        throw new Error('Error: Failed to fetch products')
    }
    const data = await res.data;
    return data;
}