import {getAuthToken} from "./admin";

export const CORS_URL = 'https://cors-anywhere.herokuapp.com/';
export const BASE_URL =
    `${CORS_URL}http://api-factory.simbirsoft1.com/api/db/`;
export const AUTH_URL =
    `${CORS_URL}http://api-factory.simbirsoft1.com/api/auth/`;
export const BASE_HEADERS = {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    Authorization: 'Secret: 4cbcea96de',
    'Content-Type': 'application/json;charset=UTF-8',
};

export const AUTH_HEADERS = {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization': `Basic ${getAuthToken()}`,
};

