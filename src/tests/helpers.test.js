import {formatDate} from "../helpers";

test('It should modify date', () => {
    const currentDate = new Date('2019-05-14T11:01:58.135Z');

    expect(formatDate(currentDate)).toEqual('14.05.19');

});
