import React, {useEffect, useState} from 'react';
import {DigitalViewClock} from "./DigitalViewClock.tsx";
import {AnalogViewClock} from "./AnalogViewClock.tsx";

type ModeType = 'analog' | 'digital';

type Props = {
    mode?: ModeType
}

export const Clock = (props: Props) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {

        const intervalId = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        //return вызовется перед тем как компонента будет демонтированна - перед тем как будет умирать
        return () => {
            clearInterval(intervalId)
        }

    }, [])


    let view
    switch (props.mode) {
        case 'analog':
            view = <AnalogViewClock date={date}/>
            break;
        case 'digital':
        default:
            view = < DigitalViewClock date={date}/>
    }

    return (
        <>{view}</>
    );
};

export type ClockViewPropsType = {
    date: Date
}
