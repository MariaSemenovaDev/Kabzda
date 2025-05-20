type ItemType = {
    title: string,
    value: any,
}

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    setCollapsed?: () => void,
    items: ItemType[]
    onClick: (value: any) => void,
}
type AccordionTitlePropsType = {
    title: string,
    onClick?: () => void,
}
type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void,
}

export function ControlledAccordion(props: AccordionPropsType) {
    console.log('accordion rendered')

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onClick={props.setCollapsed}
            />
            {!props.collapsed && <AccordionBody
                onClick={props.onClick}
                items={props.items}/>}
        </div>
    )
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendered')

    return (<h3 onClick={(event) => props.onClick()}>{props.title}</h3>
    )
}

export function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendered')
    return (
        <ul>
            {props.items.map((item, index) => (
                <li onClick={() => {
                    props.onClick(item.value)
                }} key={index}>{item.title}</li>
            ))}

        </ul>
    )
}