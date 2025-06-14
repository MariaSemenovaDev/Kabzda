import {Clock} from "./Clock.tsx";

export default {
    title: 'Clock',
    component: Clock,
}


export const BaseAnalogExample = () => {
    return <Clock mode='analog'/>;
};

export const BaseDigitalExample = () => {
    return <Clock mode='digital'/>;
};
