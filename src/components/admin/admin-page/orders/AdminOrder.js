import React, {useEffect, useState} from "react";
import {OrderFilters} from "../order-filters/OrderFilters";
import "./AdminOrder.scss";
import Paginator from "../paginator/Paginator";
import {getOrders} from "../../../../api/admin";
import {OrderList} from "../order-list/OrderList";
import {cn} from "../../../../helpers";


export function AdminOrder() {
    const ordersCn = cn('orders');

    const [orders, setOrders] = useState([]);
    const [ordersCount, setOrdersCount] = useState([]);
    const [filters, setFilters] = useState({});
    const [page, setPage] = useState(0);
    const ordersPerPage = 3;

    useEffect(() => {
        async function loadOrders() {
            const response = await getOrders(page, ordersPerPage, filters)
            setOrders(response.data);
            setOrdersCount(response.count);
        }

        loadOrders();
    },[page, filters]);

    async function filterOrders(filters) {
        setFilters(filters);
    }

    function changePage(selected) {
        setPage(Number(selected));
    }

    return <div className={ordersCn()}>
        <div className={ordersCn('title')}>Заказы</div>
        <div className={ordersCn('content')}>
            <div className={ordersCn('filters')}>
                <OrderFilters applyFilters={filterOrders}/>
            </div>
            <div className={ordersCn('list')}>
                {orders.length === 0 ? <p className={ordersCn('not-found')}>Не найдено</p> : <OrderList orders={orders}/>}
            </div>
            <div className={ordersCn('footer')}>
                <Paginator
                    itemsCount={ordersCount}
                    pageSize={ordersPerPage}
                    onPageChange={({selected}) => changePage(selected)}
                />
            </div>
        </div>
    </div>
}
