import React, {useEffect, useState} from 'react'
import './Order.scss';
import LeftSidebar from "../main/left-sidebar/LeftSidebar";
import Header from "./header/Header";
import {STEPS, StepSwitcher} from "./step-switcher/StepSwitcher";
import OrderInfo from "./order-info/OrderInfo";
import OrderStatus from "./breadcrumb/Breadcrumb";
import {getOrderByID, getOrderStatus, saveOrder} from "../../api/order";
import {convertPriceNumber, getPrice} from "../../helpers";
import { useHistory, useParams } from "react-router-dom";

export default function Order(props) {
    const [step, nextStep] = useState(STEPS.LOCATION);
    const [order, setOrder] = useState({});
    const [isModalShown, setModalShown] = useState(false);
    const [isOrderConfirmed, setOrderConfirmed] = useState(false);
    let { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        async function initConfirmedOrder() {
            const {carId: car,
                isFullTank,
                isNeedChildChair,
                isRightWheel,
                ...order
            } = (await getOrderByID(id)).data;
            const preparedOrder = {
                car,
                isFullTank,
                isNeedChildChair,
                isRightWheel,
                color: car.color,
                dateFrom: new Date(order.dateFrom),
                dateTo: new Date(order.dateTo),
                city: {label: order.cityId.name},
                distributionPoint: {address: order.pointId.address},
                rate: {rateTypeId: {name: order.rateId.rateTypeId.name}},
            }
            setOrder(preparedOrder);
            setOrderConfirmed(true);
            nextStep(STEPS.SUMMARY);
        }
        if (id) {
            initConfirmedOrder();
        }
    }, [id])

    async function confirmOrder() {
        const price = convertPriceNumber(getPrice(order));
        const orderStatus = (await getOrderStatus()).data[0];
        const preparedOrder = {
            carId: {id: order.car.id},
            cityId: {id: order.city.value},
            color: order.color.toLowerCase(),
            dateFrom: order.dateFrom.getTime(),
            dateTo: order.dateTo.getTime(),
            isFullTank: order.isFullTank,
            isNeedChildChair: order.isNeedChildChair,
            isRightWheel: order.isRightWheel,
            orderStatusId: orderStatus,
            pointId: {id: order.distributionPoint.value},
            price: price,
            rateId: {id: order.rate.id}
        }
        const confirmedOrder = await saveOrder(preparedOrder);
        const confirmedOrderID = confirmedOrder.data.id;
        history.push(`/order/${confirmedOrderID}`);
        setModalShown(false);
    }

    return <div className="order">
        {isModalShown && <div className="modal">
            <div className="modal__backdrop" />
            <div className="modal__wrapper">
                <div className="modal__title">
                    {isOrderConfirmed ? "Отменить заказ" : "Подтвердить заказ"}
                </div>
                <div className="modal__buttons">
                    <button
                        className="modal__button"
                        onClick={() => confirmOrder()}>
                        Подтвердить
                    </button>
                    <button
                        onClick={() => setModalShown(false)}
                        className='modal__button modal__button_cancel'>
                        Вернуться
                    </button>
                </div>
            </div>
        </div>}
            <LeftSidebar/>
            <div className="order__main">
                <Header/>
                <OrderStatus step={step}/>
                <div className="order__content">
                    <StepSwitcher
                        step={step}
                        handleOrder={(newOrder) => {
                            setOrder({...order, ...newOrder});
                        }}
                        order={order}
                    />
                    <OrderInfo
                        order={order}
                        nextStep={(step) => nextStep(step)}
                        confirmOrder={() => setModalShown(true)}
                        isOrderConfirmed={isOrderConfirmed}
                    />
                </div>
            </div>
        </div>
}
