import React, {useReducer, useState} from "react";
import {AccordionBody, AccordionTitle} from "./ControlledAccordion.tsx";

type ActionType = {
    type: string
}

const reducer = (state: boolean, action: ActionType) => {
// debugger
    if(action.type === 'toggle-collapsed') {
    return !state
}

    return state
}

export const UncontrolledAccordion = () => {

   // const [collapsed, setCollapsed] = useState(false);
    const [collapsed, dispatch] = useReducer(reducer, false);// диспатч - функция которая позволяет отправлять в редьюсер экшены. диспатч - с англ отправить. c помощью диспатча - отправляем инструкцию в мир реакта

    return (
        <div>
            {/*<AccordionTitle title='selfcontrolledAccordion'*/}
            {/*                onClick={() => setCollapsed(!collapsed)}/>*/}
            <AccordionTitle title='Uncontrolled Accordion'
                            onClick={() => dispatch({type: 'toggle-collapsed'})}/>

            {!collapsed && <UncontrolledAccordionBody/>}
        </div>
    );
};

export function UncontrolledAccordionBody() {
    console.log('UncontrolledAccordionBody rendered')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}