
import { useRef, useState } from "react";
import "./jokegeneratorapp.css"
import useRandomjoke from './useRandomjoke';

function Jokegeneratorapp() {

    const firstNameRef = useRef(null);
     const lastNameRef = useRef(null);

    const [fistName,setFirstName] = useState("");
    const [LastName,setLastName] = useState("");
    const Jokee = useRandomjoke(fistName,LastName);


     const generateJoke = e => {
     e.preventDefault();
     setFirstName(firstNameRef.current.value);
     setLastName(lastNameRef.current.value);
     

     
         
     }
  return (
    <div className="wrapper">


     <span>Random Joke Generator</span>


     <p id="joke">{Jokee}</p>
     <input style={{padding:'4px',border:"none",outline:"none",borderRadius:"20%"}} placeholder="Enter First Name"  
      ref={firstNameRef}
     />
     <input style={{padding:'4px',border:"none",outline:"none"}} placeholder="Enter Last Name" 
        ref={lastNameRef}
     />

<div style={{marginTop:"20px"}}>
     <button onClick={generateJoke} id="btn">Generate Joke</button>
     </div>
</div>
  )
}

export default Jokegeneratorapp
