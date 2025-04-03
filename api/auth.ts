import { apiurl } from "./utils";

const API_URL = apiurl();

export async function login(email: string, password: string) {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })

    const data = await res.json();
    if (!res.ok){
        throw new Error(data.message || 'Failed to login');
    }
    return data
}

export async function signup(email: string, password: string) {
    const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        })
    })

    const data = await res.json();
    if (!res.ok){
        throw new Error(data.message || 'Failed to login');
    }
    return data
}