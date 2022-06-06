import React, { useRef } from 'react'
import Title from './Title'

function RefParent() {

    var titleRef = useRef()
    function changeColor(){
        titleRef.current.style.color = 'tomato';
    }

  return (<>

        <button onClick={() => changeColor()}> Change Heading Color </button>
       <Title ref={titleRef}>RefParent</Title>
  </>)

  
}

export default RefParent