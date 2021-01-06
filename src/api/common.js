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
    'Authorization': `Basic ${getLocalGeneratedToken()}`,
};

export const ADMIN_HEADERS = {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization': `Bearer ${getToken()}`,
};

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

export function getCarImage(srcPath) {
    return (srcPath.includes('base64') && srcPath) ||
        `${CORS_URL}http://api-factory.simbirsoft1.com${srcPath}`
}
