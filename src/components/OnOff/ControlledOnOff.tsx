
type OnOffProps = {
    value: boolean
    setOnOffValue: (value: boolean) => void;
}

export const ControlledOnOff = ({value, setOnOffValue}: OnOffProps) => {

    const onStyle ={
        width: "30px",
        height:"30px",
        border: "1px solid green",
        display: "inline-block",
        marginRight: "5px",
        backgroundColor: value ? "green" : "",
    }
    const offStyle ={
        width: "30px",
        height:"30px",
        display: "inline-block",
        marginRight: "5px",
        border: "1px solid red",
        backgroundColor: value ? "" : "red",
    }
    const indicatorStyle ={
        width: "15px",
        height:"15px",
        borderRadius:"15px",
        display: "inline-block",
        border: "1px solid red",
        backgroundColor: value ? "green" : "red",
    }

    const onClickHandler = (val: boolean) => {
        setOnOffValue(val);
    }

    return (
        <div>
            <div style={onStyle} onClick={()=>onClickHandler(true)}>on</div>
            <div style={offStyle} onClick={()=>onClickHandler(false)}> off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
