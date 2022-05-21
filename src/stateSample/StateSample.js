import React, {useState} from 'react'

function StateSanple() {
    //name-> değişkenin adı, setName -> değişkeni değiştirecek metod, useState -> değişkenin default değeri

    const [name, setName] = useState('Melih');

    
  return (<>
    <h1>{name}</h1>
    <button onClick={() => setName('Tech Career!')}>Change Name</button>
  </>
  )
}

export default StateSanple