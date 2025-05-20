import React, {useState} from 'react';

type UncontrolledOnOffType = {
    defaultOn?: boolean,
}

const UncontrolledOnOff = ({defaultOn}:UncontrolledOnOffType) => {

    const [on, setOn] = useState(defaultOn ? defaultOn: false);

    const onStyle ={
        width: "30px",
        height:"30px",
        border: "1px solid green",
        display: "inline-block",
        marginRight: "5px",
        backgroundColor: on ? "green" : "",
    }
    const offStyle ={
        width: "30px",
        height:"30px",
        display: "inline-block",
        marginRight: "5px",
        border: "1px solid red",
        backgroundColor: on ? "" : "red",
    }
    const indicatorStyle ={
        width: "15px",
        height:"15px",
        borderRadius:"15px",
        display: "inline-block",
        border: "1px solid red",
        backgroundColor: on ? "green" : "red",
    }

    const onClickHandler = (val: boolean) => {
        setOn(val);
    }

    return (
        <div>
            <div style={onStyle} onClick={()=>onClickHandler(true)}>on</div>
            <div style={offStyle} onClick={()=>onClickHandler(false)}> off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default UncontrolledOnOff;