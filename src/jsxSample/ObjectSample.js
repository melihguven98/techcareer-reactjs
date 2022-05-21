import React from 'react'

function ObjectSample() {   

    let user = {

        name: 'Melih',
        surname: 'Guven',
        group: {
            name: 'Night Coffee',
            country: 'Turkei'
        }

    }






  return (
    <div>
        <p>Name: {user.name}</p>
        <p>Sur name: {user.surname}</p>
        <p>Group: {user.group.name.toUpperCase()}</p>
        <p>Country: {user.group.country}</p>
        
    </div>
  )
}

export default ObjectSample