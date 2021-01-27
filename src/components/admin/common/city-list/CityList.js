import {cn} from "../../../../helpers";
import {Button} from "../../../common/button/Button";
import {Link} from "react-router-dom";
import React from "react";
import "./CityList.scss";

export function CityList({cities}) {
    const cityListCn = cn('city-list');

    return <table className={cityListCn()}>
        <thead>
        <tr>
            <th>Название города</th>
        </tr>
        </thead>
        <tbody>
        {cities.map((city) => {
            return <tr key={city.id}>
                <td>{city.name}</td>
                <td className={cityListCn('button-cell')}>
                    <Button
                        label={<Link to={`/admin/city/${city.id}`}>Редактировать</Link>}
                    />
                </td>
            </tr>
        })
        }
        </tbody>
    </table>
}