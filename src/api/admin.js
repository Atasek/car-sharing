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


/*
function getRandomString(length) {
    const zeroWithDotLength = 2;
    return Math.random().toString(36).substring(zeroWithDotLength, length + zeroWithDotLength);
}

getRandomString(RANDOM_KEY_LENGTH_LIMIT);
*/
