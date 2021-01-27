import {CORS_URL} from "../common";

const BASE_HEADERS = {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    'Content-Type': 'application/json;charset=UTF-8',
};

const AUTH_URL = `${CORS_URL}http://api-factory.simbirsoft1.com/api/auth/`;

function getAuthorizationHeader() {
    return {Authorization: `Basic ${getLocalGeneratedToken()}`};
}

function getRandomKey() {
    const RANDOM_KEY_LENGTH_LIMIT = 10;
    const abc = "abcdefghijklmnopqrstuvwxyz";
    let str = "";
    while (str.length < RANDOM_KEY_LENGTH_LIMIT) {
        str += abc[Math.floor(Math.random() * abc.length)];
    }
    return str;
}

function getLocalGeneratedToken() {
    const rawAuthToken = `${getRandomKey()}:4cbcea96de`;
    return btoa(rawAuthToken);
}

export function saveAuthorization(token, expiresIn) {
    const expiresInSeconds = expiresIn * 1000;
    localStorage.setItem('token', token);
    localStorage.setItem('expiresIn', String(Date.now() + expiresInSeconds));
}

export function isAuthorised() {
    const expiresIn = Number(localStorage.getItem('expiresIn'));
    return expiresIn && expiresIn > Date.now();
}



export async function auth(userData) {
    const url = `${AUTH_URL}login`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            ...BASE_HEADERS,
            ...getAuthorizationHeader(),
        },
        body: JSON.stringify(userData),
    });

    return await response.json();
}

export async function refresh() {
    const url = `${AUTH_URL}refresh`;
    const response = await fetch(url, {
        headers: {
            ...BASE_HEADERS,
            ...getAuthorizationHeader(),
        },
    });
    return await response.json();
}