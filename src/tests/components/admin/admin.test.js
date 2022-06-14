import {render} from "@testing-library/react";

import React from "react";

import Auth from "../../../components/admin/pages/auth/Auth.js";
import {AdminFault} from "../../../components/admin/pages/error/AdminFault.js";
import {ModelsPage} from "../../../components/admin/pages/models/ModelsPage.js";
import {ModelList} from "../../../components/admin/common/model-list/ModelList";

describe('Admin component', () => {
    test('Auth renders', () => {
        render(<Auth/>)
    });
    test('ModelsPage renders', () => {
        render(<ModelsPage/>)
    });
/*    test('ModelList renders', () => {
       const models=[{model: {name:test} , id:2, name: test},{model: test , id:3, name: test}]
        render(<ModelList models={models}/>)
    });*/
    test('AdminFault renders', () => {
        render(<AdminFault/>)
    });
})
