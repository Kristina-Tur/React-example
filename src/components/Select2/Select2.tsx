import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from './Select.module.css'

type SelectPropsType = {
    value?: any
    onClick: (value: any) => void
    items: ItemsPropsType[]
}
export type ItemsPropsType = {
    value: any
    title: string
}

export const Select2 = ({value, onClick, items}: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(value)

    const selectedItem = items.find(el => el.value === value)
    const hoveredItem = items.find(el => el.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(value)
    }, [value])

    const toggleItemsHandler = () => {
        setActive(!active)
    }

    const onClickHandler = (value: number) => {
        onClick(value)
        toggleItemsHandler()
    }

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? items[i + 1]
                        : items[i - 1]
                    if (pretendentElement) {
                        onClick(pretendentElement.value)
                        return
                    }
                }
                if(!selectedItem){
                    onClick(items[0].value)
                }
            }

        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }

    }

    return (
        <div onKeyUp={onKeyUpHandler} tabIndex={0} className={styles.select + ' '/* + (active ? styles.active : '')*/}>
            <span onClick={toggleItemsHandler} className={styles.main}>{selectedItem && selectedItem.title}</span>
            {active &&
                <div className={styles.items}>
                    {items.map(el => <div
                        key={el.value}
                        onClick={() => onClickHandler(el.value)}
                        onMouseEnter={() => setHoveredElementValue(el.value)}
                        className={styles.item + ' ' + (hoveredItem === el ? styles.selected : '')}
                    >{el.title}</div>)}
                </div>
            }
        </div>
    )
        ;
};