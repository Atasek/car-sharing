import {cn} from "../../../../helpers";
import React, {useEffect, useState} from "react";
import {getCities} from "../../../../api/admin";
import Paginator from "../../../common/paginator/Paginator";
import "./Cities.scss";
import {CityList} from "../../common/city-list/CityList";
import {Button} from "../../../common/button/Button";
import {Link} from "react-router-dom";

export function Cities() {
    const citiesCn = cn('cities');

    const [cities, setCities] = useState([]);
    const [citiesCount, setCitiesCount] = useState(0);
    const [page, setPage] = useState(0);
    const citiesPerPage = 10;

    useEffect(() => {
        async function loadOrders() {
            const response = await getCities(page, citiesPerPage)
            setCities(response.data);
            setCitiesCount(response.count);
        }

        loadOrders();
    }, [page]);

    function changePage(selected) {
        setPage(Number(selected));
    }

    return (
        <div className={citiesCn()}>
            <div className={citiesCn('title')}>Города</div>
            <div className={citiesCn('content')}>
                <div className={citiesCn('actions')}>
                    <Button
                        label={<Link to='/admin/city'>Добавить город</Link>}
                    />
                </div>
                <div className={citiesCn('list')}>
                    {cities.length === 0 ? <p className={citiesCn('not-found')}>Не найдено</p> :
                        <CityList cities={cities}/>}
                </div>
                <div className={citiesCn('footer')}>
                    <Paginator
                        itemsCount={citiesCount}
                        pageSize={citiesPerPage}
                        onPageChange={({selected}) => changePage(selected)}
                    />
                </div>
            </div>
        </div>
    )
}