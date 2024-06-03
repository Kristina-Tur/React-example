import React, {useState} from 'react';
import {Select2} from "./Select2";
import {action} from "@storybook/addon-actions";

export default {
    component: 'Select2',
};

export const SelectWithValue = () => {
    const [value, setValue] = useState(2)

    return <Select2
        value={value}
        onClick={setValue}
        items={[
            {value: 1, title: 'Ann'},
            {value: 2, title: 'Bob'},
            {value: 3, title: 'Kris'}
        ]}/>
}

export const SelectWithoutValue = () => {
    const [value, setValue] = useState(null)

    return <Select2
        value={value}
        onClick={setValue}
        items={[
            {value: 1, title: 'Ann'},
            {value: 2, title: 'Bob'},
            {value: 3, title: 'Kris'}
        ]}/>
}
