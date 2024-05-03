import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';
import {OnOff} from './components/onOff/OnOff';
import {UnControlledAccordion} from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';


function App() {
    console.log('App rendering')
    return (
        <div>
            <AppTitle title={'This is App component'}/>
            <AppTitle title={'Hello'}/>
            <Rating value={3}/>
            <Accordion titleValue={'Menu'} collapsed={false}/>
            <Accordion titleValue={'Menu1'} collapsed={true}/>
            <Rating value={4}/>
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
