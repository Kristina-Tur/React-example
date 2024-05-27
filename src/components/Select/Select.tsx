import React from 'react';

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemsPropsType[]
}
export type ItemsPropsType = {
    value: any
    title: string
}

export const Select = ({value, onChange, items}:SelectPropsType) => {
    return (
        <div>
            <div>{}</div>
            {items.map(item => item.title)}
        </div>
    );
};