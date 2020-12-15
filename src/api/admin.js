import {AUTH_HEADERS, BASE_HEADERS} from "./common";

export async function auth(userData) {
    const url = `http://api-factory.simbirsoft1.com/api/auth/login/oauth`;
    const response = await fetch(url, {
        method: 'POST',
       headers: AUTH_HEADERS,
        body: JSON.stringify(userData),
    });

    return await response.json();
}

export async function refresh() {
    const url = `http://api-factory.simbirsoft1.com/api/auth/refresh`;
    const response = await fetch(url, {
        headers: BASE_HEADERS,
    });
    return await response.json();
}