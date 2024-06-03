import React, {useReducer, useState} from 'react';
import {UnControlledAccordionTitle} from './UnControlledAccordionTitle';
import {UnControlledAccordionBody} from './UnControlledAccordionBody';

type AccordionPropsType = {
    titleValue: string,
    /*collapsed: boolean*/
}

type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}
export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

export const reducer = (state: StateType, action: ActionType) => {
    switch(action.type) {
        case TOGGLE_COLLAPSED:
            const stateCopy = {...state, collapsed: !state.collapsed}
            return stateCopy
        default: return state
    }
    return state
}



export function UnControlledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    /*const [collapsed, setCollapsed] = useState(true)*/
    const [state, dispatch] = useReducer(reducer, {collapsed: false} )
    return (
        <div>
            <UnControlledAccordionTitle
                title={props.titleValue} onClick={() => {
                dispatch({type: TOGGLE_COLLAPSED})
            }}
            />
            {/*<button onClick={() => {setCollapsed(!collapsed)}}>Toggle</button>*/}
            {!state.collapsed && <UnControlledAccordionBody/>}
        </div>
    );
} 