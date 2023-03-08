import React from "react";
import Card from './components/Card'
import Data from './data.json'

function App() {
    return <div>
        <h1 className="headingStyle">Todo App</h1>
        <Card titleText = {Data[0].title} decText = {Data[0].desc}/>
        <Card titleText = {Data[1].title} decText = {Data[1].desc}/>
        <Card titleText = {Data[2].title} decText = {Data[2].desc}/>
        
        </div>

}

export default App;