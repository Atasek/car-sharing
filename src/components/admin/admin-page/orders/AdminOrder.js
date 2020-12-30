import React, {useEffect, useState} from "react";
import {AdminCustomSelect} from "../../components/AdminCustomSelect";


    export function AdminOrder() {

        return <div className="admin__orders">
            <div className="orders__title">Заказы</div>
            <div className="orders">
                <div className="orders__header">
                    <AdminCustomSelect

                    />
                </div>


            </div>
        </div>
    }
