import React from 'react'

function ObjectArraySample() {


    let webUser= [
        {
            name: 'Melih',
            surname: 'Guven',
            onlineStatus: false
        },
        {
            name: 'Aylin',
            surname: 'Ece',
            onlineStatus: false
        },
        {
            name: 'Can',
            surname: 'Onen',
            onlineStatus: true
        },
        {
            name: 'Aslı',
            surname: 'Onen',
            onlineStatus: false
        }
    ]
    //Eğer kullanıcının durumu true ise o satır KIRMIZI olsun

  return (
    <>
        <table>
            <tr>
                <td>Name</td>
                <td>Surname</td>
                <td>Status</td>
            </tr>
            {
                webUser.map((item,key) => {
                    if(item.onlineStatus === false){
                        return <tr style={{color:'red'}}>
                            <td>{item.name}</td>
                            <td>{item.surname}</td>
                            <td>{item.onlineStatus.toString()}</td>
                        </tr>
                    }else
                    {
                        return <tr style={{color:'green'}}>
                            <td>{item.name}</td>
                            <td>{item.surname}</td>
                            <td>{item.onlineStatus.toString()}</td>
                         </tr>
                    }
                })
            }
        </table>
    
    
    
    </>
  )
}

export default ObjectArraySample