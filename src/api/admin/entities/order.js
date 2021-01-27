import {BASE_URL} from "../../common";
import {BASE_HEADERS, getAdminAuthorizationHeader, getPaginationParams} from "../helpers";

export async function getOrders(page, limit, filters) {
    const url = `${BASE_URL}order?${getPaginationParams(page, limit, filters)}`;
    const response = await fetch(url, {
        headers: {
            ...BASE_HEADERS,
            ...getAdminAuthorizationHeader(),
        },
    });
    return await response.json();
}