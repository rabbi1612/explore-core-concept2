import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './team'
import User from './User'
import Friends from './Friends'

function App() {
  function Handelclick() {
    alert('button clicked')
  }
  const secondButton = () =>{
    alert('second buttton clicked')
  }
  function AddtoFive(sum) {
    alert(sum + 5)
  }

  return (
    <>
      <h3>React core consept two</h3>
      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={Handelclick} style={{backgroundColor: 'black', color:'white'}}>Click me</button>
      <button onClick={secondButton} style={{backgroundColor: 'black', color:'white'}}>Second button clicked</button>
      <button onClick={()=>{alert('third button clicked')}} style={{backgroundColor: 'black', color:'white'}}>Thhird button</button>
      <button onClick={() => AddtoFive(5)}>Five</button>
     
      
    </>
  )
}

export default App
