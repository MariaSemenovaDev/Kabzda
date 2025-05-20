import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import {AccordionBody, AccordionTitle, ControlledAccordion} from './ControlledAccordion';
import React, {useState} from "react";


export default {
    component: ControlledAccordion,
}

// const meta: Meta<typeof ControlledAccordion> = {
//     component: ControlledAccordion,
// };

// export default meta;

// type Story = StoryObj<typeof ControlledAccordion>;

// один вариант использования
// export const FirstStory: Story = { //здесь через аргументы мы можем задавать пропсы
//     args: {
//         titleValue: 'hello',
//         onClick: () => {
//         },
//     },
// }

// второй вариант использования - мы используем его

const onChangeHandler = action('onChange event'); //хэндлер функция
const onClickHandler = action('onClick item event'); //хэндлер функция

export const CollapsedAccordion = () => {

    return (
        <div>
            <ControlledAccordion titleValue={'Collapsed Accordion'}
                                collapsed={true}
                                 setCollapsed={onChangeHandler}
                                 onClick={onClickHandler}
                                items={[]}

            />
        </div>
    )
}

export const OpenedAccordion = () => {
    return (
        <ControlledAccordion titleValue={'Opened Accordion'}
                            collapsed={false}
                             setCollapsed={onChangeHandler}
                             onClick={(id)=>{alert(`user with ID ${id} should be happy`)}}
                            items={[{title: 'Dimych', value: 1}, {title: 'Masha', value: 2}, {title: 'Oleg', value: 3}]}
        />
    )
}

export const AccordionDemo = () => {

    const [collapsed, setCollapsed] = useState(false);

    return <div>
        <AccordionTitle title='Accordion'
                        onClick={() => setCollapsed(!collapsed)}/>
        {collapsed && <AccordionBody
            onClick={onClickHandler}
            items={[{title: 'Dimych', value: 1}, {title: 'Masha', value: 2}, {title: 'Oleg', value: 3}]}
        />}
    </div>
}