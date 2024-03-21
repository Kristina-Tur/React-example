import React from 'react';

type StarPropsType = {
    selected: boolean
}
export function Star(props: StarPropsType) {
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