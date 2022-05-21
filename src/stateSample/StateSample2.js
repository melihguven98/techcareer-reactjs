import React, {useState} from 'react'

function StateSanple() {
    //name-> değişkenin adı, setName -> değişkeni değiştirecek metod, useState -> değişkenin default değeri

    const [counter, setCounter] = useState(0);

    
  return (<>
    <h1>{counter}</h1>
    <button onClick={() => setCounter(counter + 1)}>Increase</button>
  </>
  )
}

export default StateSanple