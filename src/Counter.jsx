import { useState } from "react"

export default function Counter() {
    const [count , setCount] = useState(50);
    const handelAdd = () =>{
        const newCount = count + 1 ;
        setCount(newCount)
    }
    const handelReduce = () => {
        const newCount = count -1 
        setCount(newCount)
    }
    return (
        <div style={{border: '2px solid red'}}>
        <h2>Counter : {count}</h2>
        <button onClick={handelAdd}>Add</button>
        <button onClick={handelReduce}>Reduce</button>
    </div>
    )
}