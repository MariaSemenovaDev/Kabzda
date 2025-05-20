import {action} from "@storybook/addon-actions";
import UncontrolledOnOff from "./UncontrolledOnOff.tsx";


export default {
    title: "uncontrolled OnOff",
    component: UncontrolledOnOff,
}

const callback = action('on or off clicked'); //хэндлер функция, вместо заглушек

export const OnMode = () => <UncontrolledOnOff defaultOn={true}/>;
export const OffMode = () => <UncontrolledOnOff defaultOn={false}/>;
