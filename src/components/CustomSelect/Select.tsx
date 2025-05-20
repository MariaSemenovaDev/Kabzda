import React, {KeyboardEventHandler, useState} from 'react';
import styles from "./select.module.css"

type ItemType = {
    title: string,
    value: any,
}

type SelectPropsType = {
    value?: string,
    onChange?: () => void,
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {
    const {value, onChange, items} = props

    const [active, setActive] = useState(true)
    const [hoveredElementValue, setHoveredElementValue] = useState(value)

    const toggleItems = () => {
        setActive(!active)
    }

    const selectedItem = items.find((item) => item.value === value)
    const hoveredItem = items.find((item) => item.value === hoveredElementValue)

    const onItemClick = (value: string) => {
        onChange(value);
        toggleItems()
    }

    const onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {  // Исправленный тип
        // for(let i=0; i < items.length;i++){
        //     if()
        // }
    };

    return (
        <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
            <div className={styles.main}
                 onClick={toggleItems}>{selectedItem && selectedItem.title}</div>
            <span className={styles.items}>
    {
        active &&
        items.map((item: ItemType) => {
            return (
                <div className={styles.item + " " + (hoveredItem === item ? styles.selected : "")}
                onMouseEnter={()=>setHoveredElementValue(item.value)}>
                    <div
                        key={item.value}
                        onClick={() => onItemClick(item.value)
                        }
                    >
                        {item.title}
                    </div>
                </div>

            )
        })
    }
</span>
        </div>
    );
};

