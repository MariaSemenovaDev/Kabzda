import React, {useState} from 'react';

type ItemType = {
    title: string,
    value: any,
}

type FakeSelectPropsType = {
    titleValue?: any,
    collapsed?: boolean,
    setCollapsed?: (collapsed: boolean) => void,
    // onBlur?: (collapsed: boolean) => void,
    items: ItemType[]
}


export const FakeSelect = (props: FakeSelectPropsType) => {

    const [currentItem, setCurrentItem] = useState(props.items[0].title);

    const tableStyle = {
        color: "black",
        borderBottom: "1px solid grey",
    }

    return (
        <div>
            {/*<h3>{props.titleValue}</h3>*/}
            <h3
                style={tableStyle}
                onClick={props.setCollapsed}
            >{currentItem}</h3>
            {props.collapsed &&
                props.items.map(i => {
                    return (
                        <div key={i.value}
                        onClick={()=>setCurrentItem(i.title)}
                             // onBlur={props.onBlur}
                        >{i.title}</div>
                    )
                })}

        </div>
    );
};

