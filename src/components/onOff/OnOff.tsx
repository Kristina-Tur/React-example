import React, {useState} from 'react';

/*type OnOffPropsType = {
    isSwitch: boolean
}*/
export const OnOff = (/*props: OnOffPropsType*/) => {
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
    return (
        <div>
            <button style={OnButton} onClick={() => {setOn(true)}}>On</button>
            <button style={OffButton}  onClick={() => {setOn(false)}}>Off</button>
            <div style={OnOffCircle}></div>
        </div>
    )
}
