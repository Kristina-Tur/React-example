/*
import React from 'react';

type SelectPropsType = {
    value: any
    onClick: () => void
    handleOptionClick: (item: string) => void
    items: ItemsPropsType[]
    isOpen: boolean
}
export type ItemsPropsType = {
    value: any
    title: string
}

export const Select = ({value, onClick, items, isOpen, handleOptionClick}: SelectPropsType) => {
    return (
        <div>
            <div onClick={onClick}>
                {value ? value.label : 'Select an option'}
            </div>
            {isOpen && (
                <div>
                    {items.map((item) => (
                        <div onClick={() => handleOptionClick(item.value)} key={item.value}>
                            {item.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
)
    ;
};*/

import React, { useState } from 'react';

type ItemsType = {
    value: number
    title: string
}

export const Select = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<null | ItemsType>(null);

    const items: ItemsType[] = [
        {value: 1, title: 'Ann'},
        {value: 2, title: 'Bob'},
        {value: 3, title: 'Kris'}
    ]

    const itemsStylesTitle = {
        maxWidth: '160px',
        backgroundColor: 'grey',
        border: '1px solid black',
        padding: '10px 20px',
        cursor: 'pointer'
    }

    const itemsStyle = {
        maxWidth: '160px',
        border: '1px solid black',
        padding: '10px 20px',
        cursor: 'pointer'
    }

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: ItemsType) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div>
            <div style={itemsStylesTitle} onClick={handleToggle}>
                {selectedOption ? selectedOption.title + ' >' : 'Select an option >'}
            </div>
            {isOpen && (
                <div>
                    {items.map((item) => (
                        <div style={itemsStyle} onClick={() => handleOptionClick(item)} key={item.value}>
                            {item.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};