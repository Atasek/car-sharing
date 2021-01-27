import {BASE_URL} from "../../common";
import {BASE_HEADERS, getAdminAuthorizationHeader, getPaginationParams} from "../helpers";

export async function getCities(page, limit) {
    const url = `${BASE_URL}city?${getPaginationParams(page, limit, {})}`;
    const response = await fetch(url, {
        headers: {
            ...BASE_HEADERS,
            ...getAdminAuthorizationHeader(),
        },
    });
    return await response.json();
}

export async function updateCity(id, city) {
    const url = `${BASE_URL}city/${id}`;
    const response = await fetch(url, {
        headers: {
            ...BASE_HEADERS,
            ...getAdminAuthorizationHeader(),
        },
        method: 'PUT',
        body: JSON.stringify(city),
    });

    return await response.json();
}

export async function deleteCity(id) {
    const url = `${BASE_URL}city/${id}`;
    const response = await fetch(url, {
        headers: {
            ...BASE_HEADERS,
            ...getAdminAuthorizationHeader(),
        },
        method: 'DELETE',
    });

    return await response.json();
}

export async function createCity(city) {
    const url = `${BASE_URL}city/`;
    const response = await fetch(url, {
        headers: {
            ...BASE_HEADERS,
            ...getAdminAuthorizationHeader(),
        },
        method: 'POST',
        body: JSON.stringify(city),
    });

    return await response.json();
}