import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating, RatingType} from './components/Rating/Rating';
import {OnOff} from './components/onOff/OnOff';
import {UnControlledAccordion} from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';


function App() {
    console.log('App rendering')

    const [ratingValue, setRatingValue] = useState<RatingType>(2)
    return (
        <div>
            <AppTitle title={'This is App component'}/>
            <AppTitle title={'Hello'}/>
            <Rating value={ratingValue} onClick = {setRatingValue}/>
            <Accordion titleValue={'Menu'} collapsed={false}/>
            <Accordion titleValue={'Menu1'} collapsed={true}/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <UnControlledAccordion titleValue={'Menu3'}/>
            <UnControlledRating/>
        </div>
    );
}

type AppTitlePropsType = {
    title: string
}

function AppTitle(props: AppTitlePropsType) {
    console.log('AppTitle rendering')
    return (
        <h2>{props.title}</h2>
    );
}


export default App;
