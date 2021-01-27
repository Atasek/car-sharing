import React from "react";
import {cn, formatPriceNumber} from "../../../../helpers";
import "./ModelList.scss";
import {Link} from "react-router-dom";
import {Button} from "../../../common/button/Button";

export function ModelList({models}) {
    const modelListCn = cn('model-list');

    function isStrippedRow(index) {
        return (index % 2) === 0
    }

    return <table className={modelListCn()}>
        <thead>
        <tr>
            <th>Название модели</th>
            <th>Стоимость</th>
            <th>Тип</th>
            <th>Описание</th>
        </tr>
        </thead>
        <tbody>
        {models.map((model, index) => {
            return <tr key={model.id} className={modelListCn('row', {striped: isStrippedRow(index)})}>
                <td className={modelListCn('cell')}>{model.name}</td>
                <td className={modelListCn('cell')}>{formatPriceNumber(model.priceMin)} - {formatPriceNumber(model.priceMax)} ₽</td>
                <td className={modelListCn('cell')}>{model.categoryId.name}</td>
                <td className={modelListCn('cell')}>{model.description}</td>
                <td className={modelListCn('cell')}>
                    <Button
                        label={<Link to={`/admin/car/${model.id}`}>Редактировать</Link>}
                    />
                </td>
            </tr>
        })
        }
        </tbody>
    </table>
}
