import React, { useEffect, useState } from 'react'

function EffectSample() {

    const [sayac, setSayac] = useState(0)
    const [sayac2, setSayac2] = useState(0)

    //maliyetli işlemlerde ve 1 kereye mahsus çalışmasını istediğimiz durumlarda kullanılır. 

    useEffect(() => {
        console.log('Bu kod satırı sadece component yüklendiğinde çalışır.')
    }, [])

    // dizi içerisine yazılan şey değiştiğinde çalışacak
    useEffect(() => {
        console.log('Bu kod satırı sadece component yüklendiğinde çalışır.')
    }, [sayac2])


  return (<>
  
    <h1>{sayac}</h1>
    <button onClick={() => setSayac(sayac + 1)}>Arttır</button>
    <button onClick={() => setSayac2(sayac2 + 1)}>Arttır Snd</button>
    
   
  </>)
}

export default EffectSample