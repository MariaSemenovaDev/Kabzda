import {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: "input",
    component: "input", // или просто удалите эту строку, если не нужно
}

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    return (<>
        <input onChange={(e) => {
            setValue(e.currentTarget.value)
        }}/> - {value}
    </>)
}
// export const GetValueOfUncontrolledInputByButtonPress = () => {
//
//     const [value, setValue] = useState('')
//
//     return (<>
//         <input id={"inputId"}/> <button onClick={(e)=> {
//             const el: HTMLInputElement = document.getElementById("inputId")
//         setValue(el.value)}}> save </button> actual value: {value}
//     </>)
// }
export const GetValueOfUncontrolledInputByButtonPress = () => {

    const [value, setValue] = useState('')

    // 1 с помощью хука useRef создаем ссылку
    const inputRef = useRef<HTMLInputElement>(null);

    // 2 эту ссылку привязываем к инпуту через ref

    // 3 в нужном месте - в онклике - берем значение этой ссылки inputRef.current
    const onChange = () => {
        const el: HTMLInputElement = inputRef.current
        setValue(el.value)
    }

    return (<>
        <input ref={inputRef}/>
        <button onClick={onChange}> save</button>
        actual value: {value}
    </>)
}

export const ControlledInputWithFixedValue = () => <input value="it-incubator"/>

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

        setParentValue(e.currentTarget.value);
    };

    return <input value={parentValue} onChange={onChangeHandler}/>;
};


export const ControlledCheckbox = () => {
    const [parentValue, setValue] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

        setValue(e.currentTarget.checked)
    }

    return <input type='checkbox'
                  checked={parentValue}
                  onChange={onChangeHandler}
    />
}
export const ControlledSelect = () => {
    const [parentValue, setValue] = useState<string | undefined>("2")

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        debugger
        setValue(e.currentTarget.value)
    }

    return <select value={parentValue} onChange={onChangeHandler}>
        <option value="1">none</option>
        <option value="2">Minsk</option>
        <option value="3">Moscow</option>
        <option value="4">Kiev</option>
    </select>
}
