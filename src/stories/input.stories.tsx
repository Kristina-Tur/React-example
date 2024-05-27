import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    component: 'input',
};

export const UncontrolledInput = () => <input/>
export const ValueUncontrolledInput = () => {
    const [value, setValue] = useState<string>('')
    return <>
        <input onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value)}/>
        - {value}
    </>
}
export const ValueUncontrolledInputRef = () => {
    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={save}>save</button>
        - {value}
    </>
}

export const ControlledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    return <input value={value} onChange={onChangeHandler}/>
}

export const ControlledSelect = () => {
    const [value, setValue] = useState('2')
    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setValue(event.currentTarget.value)
    }
    return <select value={value} onChange={onChangeHandler}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Brest</option>
        <option value={'3'}>New York</option>
    </select>
}

export const ControlledCheckbox = () => {
    const [value, setValue] = useState(false)
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.checked)
    }
    return <input type={'checkbox'} checked={value} onChange={onChangeHandler}/>
}

