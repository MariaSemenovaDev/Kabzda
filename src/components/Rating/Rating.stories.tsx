import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';

import {ControlledRating, RatingValuePropsType} from './ControlledRating';
import {useState} from "react";


export default {
    title: "Rating",
    component: ControlledRating,
}


export const EmptyStars = () => <ControlledRating value={0} onClick={() => {
}}/>;
export const Rating1 = () => <ControlledRating value={1} onClick={() => {
}}/>;
export const Rating2 = () => <ControlledRating value={2} onClick={() => {
}}/>;
export const Rating3 = () => <ControlledRating value={3} onClick={() => {
}}/>;
export const Rating4 = () => <ControlledRating value={4} onClick={() => {
}}/>;
export const Rating5 = () => <ControlledRating value={5} onClick={() => {
}}/>;
export const RatingChanging = () => {
    const [val, setVal] = useState<RatingValuePropsType>(0)

    return (
        <ControlledRating value={val} onClick={setVal}/>
    )
};

