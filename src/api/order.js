import {BASE_URL} from "./common";

export const BASE_HEADERS = {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    Authorization: 'Secret: 4cbcea96de',
    'Content-Type': 'application/json;charset=UTF-8',
};

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

async function getCategories() {
    const url = `${BASE_URL}category`;
    const response = await fetch(url, {
        headers: BASE_HEADERS,
    });

    return await response.json();
}

export async function getRate() {
    const url = `${BASE_URL}rate`;
    const response = await fetch(url, {
        headers: BASE_HEADERS,
    });

    return await response.json();
}

export async function getOrderStatus() {
    const url = `${BASE_URL}orderStatus`;
    const response = await fetch(url, {
        headers: BASE_HEADERS,
    });

    return await response.json();
}

export async function saveOrder(order) {
    const url = `${BASE_URL}order`;
    const response = await fetch(url, {
        method: 'POST',
        headers: BASE_HEADERS,
        body: JSON.stringify(order),
    });

    return await response.json();
}

export async function getOrderByID(orderID) {
    const url = `${BASE_URL}order/${orderID}`;
    const response = await fetch(url, {
        headers: BASE_HEADERS,
    });

    return await response.json();
}

export async function getCarByID(carID) {
    const url = `${BASE_URL}car/${carID}`;
    const response = await fetch(url, {
        headers: BASE_HEADERS,
    });

    return await response.json();
}

export async function getCityByID(cityID) {
    const url = `${BASE_URL}city/${cityID}`;
    const response = await fetch(url, {
        headers: BASE_HEADERS,
    });

    return await response.json();
}

export async function getCitiesForSelect() {
    const responseCities = await getCities();
    return responseCities.data.map((city) => ({
        value: city.id,
        label: city.name
    }));
}

export async function getCategoriesForSelect() {
    const responseCategories = await getCategories();
    return responseCategories.data.map((category) => ({
        value: category.id,
        label: category.name,
        description: category.description,
    }));
}

export async function getDistributionPointsForSelect() {
    const responseDistributionPoints = await getDistributionPoints();
    return responseDistributionPoints.data.map((distributionPoint) => ({
        value: distributionPoint.id,
        label: distributionPoint.name,
        cityId: distributionPoint.cityId?.id,
        address: distributionPoint.address,
    }));
}


