import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';


function App() {
  console.log("App rendering")
  return (
      <div>
        <AppTitle title={"This is App component"} />
        <AppTitle title={"Hello"} />
        <Rating value = {3} />
        <Accordion titleValue={"Menu"} />
        <Rating value = {4} />
      </div>
  );
}


function AppTitle(props: any) {
  console.log("AppTitle rendering")
  return (
      <h2>{props.title}</h2>
  );
}


export default App;
