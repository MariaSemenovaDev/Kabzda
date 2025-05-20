import './App.css'
import {ControlledAccordion} from "./components/Accordion/ControlledAccordion.tsx";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating.tsx";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff.tsx";

import {SelfcontrolledAccordion, UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion.tsx";
import {ControlledRating, RatingValuePropsType} from "./components/Rating/ControlledRating.tsx";
import {useState} from 'react';
import {ControlledOnOff} from "./components/OnOff/ControlledOnOff.tsx";
import {Buttons} from "./mui/Buttons.tsx";


function hello() { //объявление функции
    console.log('Hello World!')
}

hello() //вызов функции

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValuePropsType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState(false);
    const [onOffValue, setOnOffValue] = useState(true);

    return (
        <div className="App">

            <Buttons/>
            <hr/>

            <ControlledRating value={ratingValue}
                              onClick={setRatingValue}/>

            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <UncontrolledRating/>

            <UncontrolledOnOff/>
            <ControlledOnOff value={onOffValue}
                             setOnOffValue={setOnOffValue}
            />

            {/*<ControlledAccordion titleValue={"ControlledAccordion accordion"}*/}
            {/*                     collapsed={accordionCollapsed}*/}
            {/*                     setCollapsed={() => setAccordionCollapsed(!accordionCollapsed)}/>*/}
            <UncontrolledAccordion/>

        </div>
    )
}

function PageTitle(props: any) {
    console.log('PageTitle rendered')
    return (
        <h1>{props.title}</h1>
    )
}


export default App
