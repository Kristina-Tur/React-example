import React from 'react';

export function Star(props: any) {
    console.log('Star rendering');
    if(props.selected){
        return (
            <span><b>star</b> </span>
        )
    } else {
        return (
            <span>star </span>
        )
    }

}