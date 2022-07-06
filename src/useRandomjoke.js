import { useEffect, useState } from 'react';


function useRandomjoke(fistName,LastName) {

    const [joke,setjoke] = useState("");


  useEffect(() => {

     const FetchJoke = async() => 
     await fetch(`http://api.icndb.com/jokes/random?firstName=${fistName}&lastName=${LastName}`)
     .then(res => res.json())
     .then(data => {
        setjoke(data.value.joke);
        console(data);
     })
     FetchJoke ();
  },[fistName,LastName])

  return joke
}

export default useRandomjoke
