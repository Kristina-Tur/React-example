import React from 'react';

type StarPropsType = {
    selected: boolean
}
export function UnControlledStar(props: StarPropsType) {
    console.log('Star rendering');
        return (
            props.selected ? <span><b>star </b></span> : <span>star </span>
        )

}