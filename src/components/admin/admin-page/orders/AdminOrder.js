import React, {useEffect, useState} from "react";
import {OrderFilters} from "../order-filters/OrderFilters";
import "./AdminOrder.scss";
import Paginator from "../paginator/Paginator";
import {getOrders} from "../../../../api/admin";
import {OrderList} from "../order-list/OrderList";


export function AdminOrder() {
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

    return <div className="orders">
        <div className="orders__title">Заказы</div>
        <div className="orders__content">
            <div className="orders__filters">
                <OrderFilters applyFilters={filterOrders}/>
            </div>
            <div className="orders__list">
                {(orders.length === 0 && <p className="orders__not-found">Не найдено</p>) || <OrderList orders={orders}/>}
            </div>
            <div className="orders__footer">
                <Paginator
                    itemsCount={ordersCount}
                    pageSize={ordersPerPage}
                    onPageChange={({selected}) => {
                        setPage(Number(selected));
                    }}
                />
            </div>
        </div>
    </div>
}
