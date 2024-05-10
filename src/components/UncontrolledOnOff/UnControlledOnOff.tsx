import React, {useState} from 'react';

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}
export const UnControlledOnOff = () => {
const [on, setOn] = useState(false)
    const OnButton = {
        backgroundColor: on ? 'green' : 'white',
        marginRight: '10px'
    }
    const OffButton = {
        backgroundColor: on ? 'white' : 'red',
        marginRight: '10px'
    }
    const OnOffCircle = {
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red',
        width: '15px',
        height: '15px',
        borderRadius: '50%'
    }

    const onClickHandlerOn = () => {
        setOn(true)
    }
    const onClickHandlerOff = () => {
        setOn(false)
    }

    return (
        <div>
            <button style={OnButton} onClick={onClickHandlerOn}>On</button>
            <button style={OffButton}  onClick={onClickHandlerOff}>Off</button>
            <div style={OnOffCircle}></div>
        </div>
    )
}
