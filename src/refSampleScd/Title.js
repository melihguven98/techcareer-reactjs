import React, { forwardRef } from 'react'

function Title(props, ref) {


  return (<>
       <div>
           <h1 ref={ref}> Melih Güven </h1>
       </div>
  </>)
}

export default forwardRef(Title)