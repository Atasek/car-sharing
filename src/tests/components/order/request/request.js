const cities = {
    count: 2,
    data: [
        {name: "Ростов-на-Дону"},
        {name: "Самара"}
    ],
    4: {name: 'Mark'},
    5: {name: 'Paul'},
};

export default function request(url) {
    return new Promise((resolve, reject) => {
        const userID = parseInt(url.substr('/users/'.length), 10);
        process.nextTick(() =>
            cities[userID]
                ? resolve(cities[userID])
                : reject({
                    error: `User with ${userID} not found.`,
                }),
        );
    });
}
