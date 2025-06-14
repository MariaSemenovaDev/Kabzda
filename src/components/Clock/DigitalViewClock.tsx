import React from "react";

type ClockViewPropsType = {
    date: Date
}

export function get2digitsString (num: number) {
    return num < 10 ? "0" +  num : num;
}

export const DigitalViewClock = ({date}: ClockViewPropsType) => {
    return <>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </>
}