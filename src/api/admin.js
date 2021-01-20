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

export async function updateCar(id, car) {
    const url = `${BASE_URL}car/${id}`;
    const response = await fetch(url, {
        headers: ADMIN_HEADERS,
        method: 'PUT',
        body: JSON.stringify(car),
    });

    return await response.json();
}

export async function deleteCar(id) {
    const url = `${BASE_URL}car/${id}`;
    const response = await fetch(url, {
        headers: ADMIN_HEADERS,
        method: 'DELETE',
    });

    return await response.json();
}

export async function createCar(car) {
    const url = `${BASE_URL}car/`;
    const response = await fetch(url, {
        headers: ADMIN_HEADERS,
        method: 'POST',
        body: JSON.stringify(car),
    });

    return await response.json();
}
