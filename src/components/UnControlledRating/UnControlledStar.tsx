import React from 'react';

type StarPropsType = {
    selected: boolean
}
export function UnControlledStar(props: StarPropsType) {
    console.log('Star rendering');
    if(props.selected){
        return (
            <span>star </span>
        )
    } else {
        return (
            <span><b>star</b> </span>
        )
    }

}