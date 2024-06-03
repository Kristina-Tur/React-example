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

import React from 'react';
import {ItemsType} from "../../App";
import {Box, FormControl, InputLabel, NativeSelect} from "@mui/material";

type SelectPropsType = {
    items: ItemsType[]
    handleToggle: () => void
    selectedOption: null | ItemsType
    handleOptionClick: (option: ItemsType) => void
    isOpen: boolean
}

export const Select = ({
                           items,
                           handleOptionClick,
                           isOpen,
                           handleToggle,
                           selectedOption
                       }: SelectPropsType) => {


    return (
        <Box sx={{minWidth: 120}}>
            <FormControl>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Name
                </InputLabel>
                <NativeSelect>
                    {items.map((item) => (
                        <option key={item.value}>
                            {item.title}
                        </option>
                    ))}
                </NativeSelect>
            </FormControl>
        </Box>
        /*<div>
            <SelectTitle selectedOption={selectedOption} handleToggle={handleToggle}/>
            {isOpen && (
                <SelectBody items={items} handleOptionClick={handleOptionClick}/>
            )}
        </div>*/
    );
};

type SelectTitleProps = {
    handleToggle: () => void
    selectedOption: null | ItemsType
}

export const SelectTitle = ({handleToggle, selectedOption}: SelectTitleProps) => {
    const itemsStylesTitle = {
        maxWidth: '160px',
        backgroundColor: 'grey',
        border: '1px solid black',
        padding: '10px 20px',
        cursor: 'pointer'
    }

    return <div style={itemsStylesTitle} onClick={handleToggle}>
        {selectedOption ? selectedOption.title + ' >' : 'Select an option >'}
    </div>
}

type SelectBodyProps = {
    items: ItemsType[]
    handleOptionClick: (option: ItemsType) => void
}

export const SelectBody = ({items, handleOptionClick}: SelectBodyProps) => {
    const itemsStyle = {
        maxWidth: '160px',
        border: '1px solid black',
        padding: '10px 20px',
        cursor: 'pointer'
    }

    return <div>
        {items.map((item) => (
            <div style={itemsStyle} onClick={() => handleOptionClick(item)} key={item.value}>
                {item.title}
            </div>
        ))}
    </div>
}

