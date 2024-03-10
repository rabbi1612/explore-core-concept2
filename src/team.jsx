import { useState } from "react"

export default function Team() {
   
    const teamStyle = {
        border: '2px solid purple',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px'
    }
   const [team, setTeam] = useState(11)
   const addHandler = () =>{
    const newTeam = team + 1;
    setTeam(newTeam)
   }
   const removeHandel = () =>{
    const newTeam = team - 1;
    setTeam(newTeam)
   }
    return(
        <div style={teamStyle}>
            <h3>Player : {team}</h3>
            <button onClick={addHandler}>Add</button>
            <button onClick={removeHandel}>Remove</button>
        </div>
    )
}