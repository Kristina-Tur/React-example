import React, {useState} from 'react';
import {Select, SelectBody, SelectTitle} from "./Select";
import {ItemsType} from "../../App";
import {action} from "@storybook/addon-actions";

export default {
    component: 'Select',
};

const handleToggle = action('list opens')
const handleOptionClick = action('option to start')

export const SelectDemo = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedOption, setSelectedOption] = useState<null | ItemsType>(null);
    const items = [
        {value: 1, title: 'Ann'},
        {value: 2, title: 'Bob'},
        {value: 3, title: 'Kris'}
    ]
    return (
        <Select
            items={items}
            handleToggle={() => setIsOpen(!isOpen)}
            handleOptionClick={(option) => {
                setSelectedOption(option)
                setIsOpen(false)
            }}
            selectedOption={selectedOption}
            isOpen={isOpen}
        />
    )
}

export const SelectClose = () => <SelectTitle
    selectedOption={null} handleToggle={handleToggle}
/>

export const SelectOpen = () => <SelectBody
    items={[
        {value: 1, title: 'Ann'},
        {value: 2, title: 'Bob'},
        {value: 3, title: 'Kris'}
    ]}
    handleOptionClick={handleOptionClick}
/>

