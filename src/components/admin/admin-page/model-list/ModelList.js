import React from "react";
import {cn, formatPriceNumber} from "../../../../helpers";
import "./ModelList.scss";
import {Link} from "react-router-dom";
import {AdminCustomButton} from "../../components/admin-custom-button/AdminCustomButton";

export function ModelList({models}) {
    const modelListCn = cn('model-list');

    return <table className={modelListCn()}>
        <thead>
        <tr>
            <th>Название модели</th>
            <th>Описание</th>
            <th>Тип</th>
            <th>Стоимость</th>
        </tr>
        </thead>
        <tbody>
        {models.map((model) => {
            return <tr key={model.id}>
                <td>{model.name}</td>
                <td>{formatPriceNumber(model.priceMin)} - {formatPriceNumber(model.priceMax)} ₽</td>
                <td>{model.categoryId.name}</td>
                <td>{model.description}</td>
                <td>
                    <AdminCustomButton
                        label={<Link to={`/admin/car/${model.id}`}>Редактировать</Link>}
                    />
                </td>
            </tr>
        })
        }
        </tbody>
    </table>
}
