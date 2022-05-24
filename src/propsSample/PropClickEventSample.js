import React from 'react'

function PropClickEventSample(props) {
  return (<>
     <button onClick={() => props.hello("Melih")}>Hello props!!</button>
  </>
  )
}

export default PropClickEventSample