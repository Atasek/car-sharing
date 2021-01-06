import {ADMIN_HEADERS, AUTH_HEADERS, AUTH_URL, BASE_URL} from "./common";

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
    const params = {
        page,
        limit
    };
    Object.keys(filters).forEach(key => {
        if (filters[key]) {
            params[key] = filters[key];
        }
    });
    const url = `${BASE_URL}order?${new URLSearchParams(params)}`;
    const response = await fetch(url, {
        headers: ADMIN_HEADERS,
    });
    return await response.json();
}
