import React from 'react';

type OnOffPropsType = {
    isSwitch: boolean
}
export const OnOff = (props: OnOffPropsType) => {
    if (props.isSwitch) {
        return (
            <div>
                <button style={{backgroundColor: 'green'}}>On</button>
                <button>Off</button>
                <div style={{backgroundColor: 'green', width: '20px',  height: '20px',
                    borderRadius: '50%'}}></div>
            </div>
        )
    } else {
        return (
            <div>
                <button>On</button>
                <button style={{backgroundColor: 'red'}}>Off</button>
                <div style={{backgroundColor: 'red', width: '20px',  height: '20px',
                    borderRadius: '50%'}}></div>
            </div>
        )
    }
}
