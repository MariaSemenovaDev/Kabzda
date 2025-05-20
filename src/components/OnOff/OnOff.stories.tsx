import {ControlledOnOff} from './ControlledOnOff';
import {useState} from "react";
import {action} from "@storybook/addon-actions";


export default {
    title: "OnOff stories",
    component: ControlledOnOff,
}

const callback = action('on or off clicked'); //хэндлер функция, вместо заглушек

export const On = () => <ControlledOnOff value={true} setOnOffValue={callback}/>;
export const Off = () => <ControlledOnOff value={false} setOnOffValue={callback}/>;

export const OnOffChanging = () => {
    const [on, setOn] = useState(true);

    return (
        <ControlledOnOff value={on} setOnOffValue={setOn}/>
    )
};
