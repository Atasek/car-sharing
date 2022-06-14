import {
    formatCarNumber,
    formatDate,
    formatPriceNumber,
    getDurationOfLease,
    getPrice
} from "../helpers";
import {STEPS} from "../components/order/step-switcher/StepSwitcher";


describe("Helpers", () => {
test('It should modify date', () => {
    const currentDate = new Date('2019-05-14T11:01:58.135Z');

    expect(formatDate(currentDate)).toEqual('14.05.19');

});
test('It should modify price', () => {
    expect(formatPriceNumber(934893585)).toEqual('934 893 585');

});
test('It should modify price', () => {
    expect(formatCarNumber('934893585')).toEqual("9 348 935 85");

});
test('It should modify price', () => {
    const step = STEPS.LOCATION;
    expect(getPrice(step)).toEqual("0");

});
test('It should modify price', () => {
    const step = STEPS.SUMMARY;
    const order = {isFullTank: true};
    expect(getPrice(step, order)).toEqual("0");

});
test('date diff', () => {
    const dateTo = new Date('2019-05-14T11:01:58.135Z');
    const dateFrom = new Date('2019-05-18T11:01:58.135Z');
    expect(getDurationOfLease(dateTo, dateFrom)).toEqual(4);

});
})
