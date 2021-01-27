import Paginator from "../../../common/paginator/Paginator";
import React, {useEffect, useState} from "react";
import {cn} from "../../../../helpers";
import {ModelFilters} from "../../common/model-filters/ModelFilters";
import "./ModelsPage.scss";
import {ModelList} from "../../common/model-list/ModelList";
import {getCars} from "../../../../api/admin";


export function ModelsPage() {
    const modelsCn = cn('models');

    const [cars, setCars] = useState([]);
    const [carsCount, setCarsCount] = useState([]);
    const [filters, setFilters] = useState({});
    const [page, setPage] = useState(0);
    const carsPerPage = 10;

    useEffect(() => {
        async function loadOrders() {
            const response = await getCars(page, carsPerPage, filters)
            setCars(response.data);
            setCarsCount(response.count);
        }

        loadOrders();
    },[page, filters]);

    async function filterModels(filters) {
        setFilters(filters);
    }

    function changePage(selected) {
        setPage(Number(selected));
    }

    return <div className={modelsCn()}>
        <div className={modelsCn('title')}>Автомобили</div>
        <div className={modelsCn('content')}>
            <div className={modelsCn('filters')}>
                <ModelFilters applyFilters={filterModels}/>
            </div>
            <div className={modelsCn('list')}>
                {cars.length === 0 ? <p className={modelsCn('not-found')}>Не найдено</p> : <ModelList models={cars}/> }
            </div>
            <div className={modelsCn('footer')}>
                <Paginator
                    itemsCount={carsCount}
                    pageSize={carsPerPage}
                    onPageChange={({selected}) => changePage(selected)}
                />
            </div>
        </div>
    </div>
}
