import {action} from '@storybook/addon-actions';

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


