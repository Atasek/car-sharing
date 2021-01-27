export const BASE_HEADERS = {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
    'Content-Type': 'application/json;charset=UTF-8',
};

export function getAdminAuthorizationHeader() {
    return {Authorization: `Bearer ${localStorage.getItem('token')}`};
}

export function getPaginationParams(page, limit, filters) {
    const params = {
        page,
        limit
    };
    // Удаляем пустые фильтры, чтобы избежать 500 с сервера
    Object.keys(filters).forEach(key => {
        if (filters[key]) {
            params[key] = filters[key];
        }
    });
    return new URLSearchParams(params)
}


