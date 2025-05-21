import {useMemo, useState} from "react";

export default {
    title: "use state demo",
}

function generateData () {
    console.log('generate data')
    return 3453452352
}

export const Example1 = () => {
    console.log('example 1')

//     const initialValue = useMemo(generateData, []) // вызов generateData 1 раз
//     // const [counter, setCounter] = useState(initialValue1);
//
//     const initialValue1 = generateData() // вызов generateData каждый раз при изменении
// // const [counter, setCounter] = useState(initialValue1);

const [counter, setCounter] = useState(generateData); // вызов generateData 1 раз как с useMemo

    const changer = (state) => {
        return state + 1;
    }

    return <>
    <button onClick={()=> setCounter(state => state + 1)}> + </button>
        {counter}
    </>
}