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

export async function getCitiesForSelect() {
    const responseCities = await getCities();
    return responseCities.data.map((city) => ({
        value: city.id,
        label: city.name
    }));
}

export async function getDistributionPointsForSelect() {
    const responseDistributionPoints = await getDistributionPoints();
    return responseDistributionPoints.data.map((distributionPoint) => ({
        value: distributionPoint.id,
        label: distributionPoint.name,
        cityId: distributionPoint.cityId.id,
        address: distributionPoint.address,
    }));
}
