export const CORS_URL = 'https://cors-anywhere.herokuapp.com/';
export const BASE_URL =
    `${CORS_URL}http://api-factory.simbirsoft1.com/api/db/`;
export const BASE_HEADERS = {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    Authorization: 'Secret: 4cbcea96de',
    'Content-Type': 'application/json;charset=UTF-8',
};

export const AUTH_HEADERS = {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization': `Basic ${authToken()}`,
};


export function authToken() {

    function clientSecret() {
        const abc = "abcdefghijklmnopqrstuvwxyz";
        let str = "";
        while (str.length < 10) {
            str += abc[Math.floor(Math.random() * abc.length)];
        }
        return str;
    }

    let string = `${clientSecret()}:4cbcea96de`;
    return btoa(string);
}