import {ADMIN_HEADERS, AUTH_HEADERS, AUTH_URL, BASE_URL, getPaginationParams} from "./common";

export async function auth(userData) {
    const url = `${AUTH_URL}login`;
    const response = await fetch(url, {
        method: 'POST',
        headers: AUTH_HEADERS,
        body: JSON.stringify(userData),
    });

    return await response.json();
}

export async function refresh() {
    const url = `${AUTH_URL}refresh`;
    const response = await fetch(url, {
        headers: AUTH_HEADERS,
    });
    return await response.json();
}

export async function getOrders(page, limit, filters) {
    const url = `${BASE_URL}order?${getPaginationParams(page, limit, filters)}`;
    const response = await fetch(url, {
        headers: ADMIN_HEADERS,
    });
    return await response.json();
}

export async function getCars(page, limit, filters) {
    const url = `${BASE_URL}car?${getPaginationParams(page, limit, filters)}`;
    const response = await fetch(url, {
        headers: ADMIN_HEADERS,
    });
    return await response.json();
}
