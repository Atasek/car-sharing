import React from 'react';

import { render } from '@testing-library/react';
import {Alert} from "../../components/common/alert/Alert.js";
import {Button} from "../../components/common/button/Button.js";
import CustomCheckbox from "../../components/common/form-parts/checkbox/Checkbox.js";
import {CheckboxPicker} from "../../components/common/form-parts/checkbox-picker/CheckboxPicker.js";
import CustomDatepicker from "../../components/common/form-parts/date-picker/Datepicker.js";
import {FileInput} from "../../components/common/form-parts/file-input/FileInput";
import {Input} from "../../components/common/form-parts/input/Input";
import RadioInput from "../../components/common/form-parts/radio/Radio";
import Select from "react-select";
import {Textarea} from "../../components/common/form-parts/textarea/Textarea";
import Paginator from "../../components/common/paginator/Paginator";
import {ProgressBar} from "../../components/common/progress-bar/ProgressBar";


describe('Common component', () => {
    test('Alert renders', () => {
        render(<Alert/>)
    });
    test('Button renders', () => {
        render(<Button/>)
    });
    test('CustomCheckbox renders', () => {
        render(<CustomCheckbox/>)
    });
    test('CheckboxPicker renders', () => {
        render(<CheckboxPicker/>)
    })
    test('CustomDatepicker renders', () => {
        render(<CustomDatepicker/>)
    });
    test('FileInput renders', () => {
        render(<FileInput/>)
    });
    test('Input renders', () => {
        render(<Input/>)
    });
    test('RadioInput renders', () => {
        render(<RadioInput/>)
    });
    test('Select renders', () => {
        render(<Select/>)
    });
    test('Textarea renders', () => {
        render(<Textarea/>)
    });
    test('Paginator renders', () => {
        render(<Paginator/>)
    });
    test('ProgressBar renders', () => {
        render(<ProgressBar/>)
    });
})
