import { useAuth } from "@/store/authStore";
import { apiurl } from "./utils";

const API_URL = apiurl();

 export async function createOrder(items: any[]) {
    const token = useAuth.getState().token;
    const res = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        },
        body: JSON.stringify({ order: {}, items}) 
    });
    if (!res.ok) {
        throw new Error('Error: Failed to fetch product')
    }
    const data = await res.json();
    return data;
}