import {STEPS} from "./components/order-page/step-switcher/StepSwitcher";
import {withNaming} from "@bem-react/classname";

export function formatPriceNumber(bigNumber) {
    return Number(bigNumber).toLocaleString().replace(/,/g, ' ')
}

export function convertPriceNumber(stringPrice) {
    return Number(stringPrice.replace(/ /g, ''))
}

export function formatDate(date) {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}

export function formatCarNumber(number) {
    return (number.slice(0, 1) + ' ' + number.slice(1, 4) + ' ' + number.slice(4, 7) + ' ' + number.slice(7));
}

export function getPrice(order, step) {
    if (step === STEPS.LOCATION) {
        return '0';
    }
    if (step === STEPS.MODEL) {
        return order.car ? `от ${formatPriceNumber(order.car.priceMin)} до ${formatPriceNumber(order.car.priceMax)}`: 0;
    }
    if (step === STEPS.ADDITION || STEPS.SUMMARY) {
        let price = 0;
        if (order.dateTo && order.dateFrom) {
            price = getDurationOfLease(order.dateTo, order.dateFrom) * order.car.priceMin;
        }
        if (order.isFullTank) {
            price += 500;
        }
        if (order.isNeedChildChair) {
            price += 200;
        }
        if (order.isRightWheel) {
            price += 1600;
        }
        return formatPriceNumber(price);
    }
}

export function getDurationOfLease(dateTo, dateFrom) {
    const diffTime = Math.abs(dateTo - dateFrom);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

export const cn = withNaming({ n: '', e: '__', m: '_', v: '_' });
