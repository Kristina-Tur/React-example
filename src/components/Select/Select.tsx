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
            <div onClick={onClick}>Select an option
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
};