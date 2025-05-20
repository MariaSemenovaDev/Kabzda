import {ControlledOnOff} from './ControlledOnOff';
import {useState} from "react";
import {action} from "@storybook/addon-actions";
import {FakeSelect} from "./FakeSelect.tsx";


export default {
    title: "fakeSelect stories",
    component: FakeSelect,
}

const callback = action('on or off clicked'); //хэндлер функция, вместо заглушек

export const OpenSelect = () => <FakeSelect titleValue={"names"}
                                            collapsed={true}
                                            items={[{title: 'Dimych', value: 1}, {
                                                title: 'Masha',
                                                value: 2
                                            }, {title: 'Oleg', value: 3}]}/>;
export const CloseSelect = () => <FakeSelect titleValue={"names"}
                                             collapsed={false}
                                             items={[{title: 'Dimych', value: 1}, {
                                                 title: 'Masha',
                                                 value: 2
                                             }, {title: 'Oleg', value: 3}]}/>;

export const ModeSelect = () => {
    const [mode, setMode] = useState(false);

    const seModeHandler = () => {
        setMode(!mode)
    }
    // const onBlurHandler = () => {
    //     setMode(false)
    // }
    return (
        <FakeSelect titleValue={"names"}
                    collapsed={mode}
                    setCollapsed={seModeHandler}
                    items={[{title: 'Dimych', value: 1}, {
                        title: 'Masha',
                        value: 2
                    }, {title: 'Oleg', value: 3}]}
                    // onBlur={onBlurHandler}
        />
    )
};
