
async function getPoints(changeCityPoints) {
    try {
        let newArr = [];
        for (const item of changeCityPoints) {

            const str = item.cityId.name + ` ` + item.address;
            const key = `d19400d5-dcee-4347-b28c-3e886c450d64`;
            const api =`https://geocode-maps.yandex.ru/1.x/?format=json&geocode=${str}&apikey=${key}`;

            let response = await fetch(api);
            let coordinate = await response.json().then(result => result.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ', 2).reverse());

            newArr.push(coordinate);
        }
        return newArr;
    } catch (error) {
        console.log(error);
        return [];
    }
}

async function getCenter(changeCityPoints) {
    try {
        const key = `d19400d5-dcee-4347-b28c-3e886c450d64`;
        const api =`https://geocode-maps.yandex.ru/1.x/?format=json&geocode=${changeCityPoints[0].cityId.name}&apikey=${key}`;

        let response = await fetch(api);
        return await response.json().then(result => result.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ', 2).reverse());
    } catch (error) {
        console.log(error);
    }
}

export async function setPoints(points, changeCity, setPointsOfCity, setCenter) {
    const pointsOfThisCity = points.data.filter(item => item.cityId.name === changeCity.name);

    const pointsCoordinates = await getPoints(pointsOfThisCity);
    const centerOfMap = await getCenter(pointsOfThisCity);

    const arr = []
    pointsOfThisCity.forEach((item, index) => {
        const obj = {
            label: item.address,
            value: item.address,
            city: item.cityId.name,
            coordinates: pointsCoordinates[index]
        }
        arr.push(obj);
    });

    setPointsOfCity(arr);
    setCenter(centerOfMap);
}