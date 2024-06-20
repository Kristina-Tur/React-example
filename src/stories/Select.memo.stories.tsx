import React, {memo, useMemo, useState} from 'react';
import {Select2} from "../components/Select2/Select2";
import {light} from "@mui/material/styles/createPalette";

export default {
    component: 'Select2',
};

export const SelectMemo = () => {
    const [value, setValue] = useState(null)

    console.log('render select')
    const items = useMemo(() => [
        { value: 1, title: 'Ann' },
        { value: 2, title: 'Bob' },
        { value: 3, title: 'Kris' },
    ], []);

    const SelectMemo = memo(Select2)
    return <SelectMemo
        value={value}
        onClick={setValue}
        items={items}/>
}
