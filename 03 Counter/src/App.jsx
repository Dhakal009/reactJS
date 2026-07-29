import { useState } from "react";


function App(){
    let [counter,setCounter]=useState(0)
    const addValue = ()=>{
        if(counter < 20)
            setCounter(counter+1)
        
    }
    const decreaseValue = ()=>{
        if (counter >= 1)
            setCounter(counter-1)
        
    }



    return(
    <>
    <h1> COUNTER </h1>
    <h2>Counter value: {counter}</h2> 

    <button onClick= 
        {addValue}

    >Increase</button>
    <br />
    <button onClick={
        decreaseValue
    }
    >Decrease</button>
    </>
    )
}

export default App;