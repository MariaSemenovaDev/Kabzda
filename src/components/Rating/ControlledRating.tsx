import {useState} from "react";

export type RatingValuePropsType = 0 | 1 | 2 | 3 | 4 | 5

type ControlledRatingPropsType = {
    value: RatingValuePropsType
    onClick: () => void
}

export function ControlledRating(props: ControlledRatingPropsType) {
    console.log('rating rendered')


    return (
        <div>
            <Star  selected={ props.value > 0} onClick={props.onClick} value={ 1 } />
            <Star  selected={ props.value > 1} onClick={props.onClick} value={ 2 }/>
            <Star  selected={ props.value > 2} onClick={props.onClick} value={ 3 }/>
            <Star  selected={ props.value > 3} onClick={props.onClick} value={ 4 }/>
            <Star  selected={ props.value > 4} onClick={props.onClick} value={ 5 }/>

        </div>
    )
}


type StarPropsType = {
    selected: boolean
    value: RatingValuePropsType
    onClick: (value: RatingValuePropsType) => void
}

function Star(props: StarPropsType) {
    console.log('star rendered')
    return (
        <span onClick={()=>{props.onClick(props.value)}}>
                {props.selected ? <b>star </b> : "star "}
            </span>

    )

}
