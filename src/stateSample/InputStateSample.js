import React, {useState} from 'react'

function InputStateSample() {


    let favoriteSingers = ['Bergen', 'Barış Manço', 'Cem Karaca', 'Müslüm Gürses']
    
    const [singers, setSingers] = useState(favoriteSingers)
    const [name, setName] = useState('')
    
    const newSinger = () => {
        //diziden yeni referans istediği için spread operatorünü kullanıyoruz
        setSingers([...singers, name]);
    }

  return (
    <>
        <div style={{padding: 20}}>
            {
                singers.map((item,key) => {
                    return <li ket={key}>{item}</li>
                })
            }
        
            {/* Her change olduğunda input'u yenile */}

            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={()=>{newSinger()}}>Add New</button>
            <button onClick={()=>{setSingers([])}}>Remove All</button>
        </div>
    </>
  )
}

export default InputStateSample