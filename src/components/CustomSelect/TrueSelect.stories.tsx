import {Select} from "./Select.tsx";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: "Select",
    component: Select,
}

const onChange = action("value changed")

export const WithValue = () => {

    const [value, setValue] = useState("2")

    return (
    <>
        <div>
            <Select onChange={setValue}
                    value={value}
                    items={[{title: 'Minsk', value: "1"}, {title: 'Moscow', value: "2"}, {title: 'Kiev', value: "3"}]}
            />
        </div>
    </>
    )

}
export const WithoutValue = () => {

    const [value, setValue] = useState(null)

    return (
    <>
        <div>
            <Select onChange={setValue}
                    value={value}
                    items={[{title: 'Minsk', value: "1"}, {title: 'Moscow', value: "2"}, {title: 'Kiev', value: '3'}]}
            />
        </div>

    </>
    )

}