import {BASE_HEADERS, BASE_URL} from "./common";

export async function getCars() {
    const url = `${BASE_URL}car`;
    const response = await fetch(url, {
        headers: BASE_HEADERS,
    });

    return await response.json();
}

export async function getCities() {
    const url = `${BASE_URL}city`;
    const response = await fetch(url, {
        headers: BASE_HEADERS,
    });

    return await response.json();
}
export async function getDistributionPoints() {
    const url = `${BASE_URL}point`;
    const response = await fetch(url, {
        headers: BASE_HEADERS,
    });

    return await response.json();
}
