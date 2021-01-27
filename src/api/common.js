export const CORS_URL = 'https://cors-anywhere.herokuapp.com/';
export const BASE_URL = `${CORS_URL}http://api-factory.simbirsoft1.com/api/db/`;

export function getCarImage(srcPath) {
    return (srcPath.includes('base64') && srcPath) ||
        `${CORS_URL}http://api-factory.simbirsoft1.com${srcPath}`
}
