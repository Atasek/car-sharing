import {AUTH_HEADERS, AUTH_URL} from "./common";

export async function auth(userData) {
    const url = `${AUTH_URL}login/oauth`;
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

const RANDOM_KEY_LENGTH_LIMIT = 10;

function getRandomKey() {
    const abc = "abcdefghijklmnopqrstuvwxyz";
    let str = "";
    while (str.length < RANDOM_KEY_LENGTH_LIMIT) {
        str += abc[Math.floor(Math.random() * abc.length)];
    }
    return str;
}

export function getAuthToken() {

    let string = `${getRandomKey()}:4cbcea96de`;
    return btoa(string);
}

export function saveAuthorization(token, expiresIn) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiresIn', Date.now() + expiresIn);
}

export function getToken() {
        return localStorage.getItem('token');
}

export function isAuthorised() {
    const expiresIn = Number(localStorage.getItem('expiresIn'));
    return expiresIn && expiresIn > Date.now();
}
