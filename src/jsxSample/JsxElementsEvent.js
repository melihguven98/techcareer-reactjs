import React from 'react'

function JsxElementsEvent() {

    const hello = () => {

        alert('Hello JSX')
    }

    return (<>
  
        <button onClick={()=> alert('Hellooo')}>Hello Jsx</button>
        <button onClick={()=> hello()}>Hello Jsx 2</button>
        <button onClick={hello}>Hello Jsx 3</button>
        {/* Eğer Hello Jsx 3'de hello() olarak yazsaydık sayfa açılır açılmaz çalışırdı.  */}
  
    </>)
}

export default JsxElementsEvent