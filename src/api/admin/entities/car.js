import {BASE_URL} from "../../common";
import {BASE_HEADERS, getAdminAuthorizationHeader, getPaginationParams} from "../helpers";

export async function getCars(page, limit, filters) {
    const url = `${BASE_URL}car?${getPaginationParams(page, limit, filters)}`;
    const response = await fetch(url, {
        headers: {
            ...BASE_HEADERS,
            ...getAdminAuthorizationHeader(),
        }
    });
    return await response.json();
}

export async function updateCar(id, car) {
    const url = `${BASE_URL}car/${id}`;
    const response = await fetch(url, {
        headers: {
            ...BASE_HEADERS,
            ...getAdminAuthorizationHeader(),
        },
        method: 'PUT',
        body: JSON.stringify(car),
    });

    return await response.json();
}

export async function deleteCar(id) {
    const url = `${BASE_URL}car/${id}`;
    const response = await fetch(url, {

        headers: {
            ...BASE_HEADERS,
            ...getAdminAuthorizationHeader(),
        },
        method: 'DELETE',
    });

    return await response.json();
}

export async function createCar(car) {
    const url = `${BASE_URL}car/`;
    const response = await fetch(url, {

        headers: {
            ...BASE_HEADERS,
            ...getAdminAuthorizationHeader(),
        },
        method: 'POST',
        body: JSON.stringify(car),
    });

    return await response.json();
}