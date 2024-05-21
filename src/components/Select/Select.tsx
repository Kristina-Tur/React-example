import React from 'react';

type SelectPropsType = {
    titleValue: string
    onClick: () => void
    items?: ItemsPropsType[] | undefined
    onItemClick?: () => void
}
export type ItemsPropsType = {
    value: number
    title: string
}

export const Select = () => {
    return (
        <div>
            <div>{}</div>
            {}
        </div>
    );
};