import React from 'react'

function MapSample() {

    let countries = ['Turkei', 'Ukrain', 'Russia', 'Japan', 'England', 'USA'];
    
  return (
    <>
    <h3>Country List</h3>
        <ul>
            {/* Key elemanın index numarası */}
            {
                countries.map((item,key) => {
                    return <li>{item}</li>
                })
            }
        </ul>
    </>
  )
}

export default MapSample