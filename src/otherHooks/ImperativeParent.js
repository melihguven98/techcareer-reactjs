import React, { useRef } from 'react'
import ImperativeHookSample from './ImperativeHookSample'

function ImperativeParent() {

    //* useImperative Hook Sample
    const inputRef = useRef();

  return (<>
       <div>
         <ImperativeHookSample ref={inputRef}></ImperativeHookSample>
         <button onClick={() => inputRef.current.focusInput()}>Focus</button>
         <button onClick={() => inputRef.current.loseFocus()}>Lose Focus</button>

       </div>
  </>)
}

export default ImperativeParent