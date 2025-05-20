import {useState} from "react";


export function UncontrolledRating() {
    console.log('rating rendered')


    const [val, setVal] = useState(0)

    // const onClickHandler = (val: number) => {
    //     setVal(val)
    // }

    return (
        <div>
            <Star selected={val > 0} setVal={()=>{setVal(1)}} />
            <Star selected={val > 1} setVal={()=>{setVal(2)}} />
            <Star selected={val > 2} setVal={()=>{setVal(3)}} />
            <Star selected={val > 3} setVal={()=>{setVal(4)}} />
            <Star selected={val > 4} setVal={()=>{setVal(5)}} />

        </div>
    )
}


type StarPropsType = {
    selected: boolean
    // value:  1 | 2 | 3| 4 | 5
    setVal: () =>()=> void
}
export function Star(props: StarPropsType) {
    console.log('star rendered')
    return (
        <span onClick={props.setVal}>
                {props.selected ? <b>star </b> : "star "}
            </span>

    )

}
