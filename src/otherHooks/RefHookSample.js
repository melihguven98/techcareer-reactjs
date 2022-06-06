import React, { useRef, useState } from 'react'

function RefHookSample() {




    //* 1.YOL Klasik olan

    // const [color, setColor] = useState('')

    // return (<>
        
    // <h1 style={{color:color}}>Melih Güven</h1>
    //     <button onClick={() => setColor("tomato")}>Change H1 Color</button>
    // </>)

    //* 2.YOL

    // const changeColor = () => {

    //     document.getElementById('title').style.color = 'tomato'
    // }


    // return (<>
    //     <h1 id='title'>Melih Güven</h1>
    //     <button onClick={() => changeColor()}>Change Color</button>
    // </>)

    //* 3. YOL
    
    let h1Ref = useRef();

    const changeColor = () => {
        
        h1Ref.current.style.color = 'blue';


    }

    return (<>
        <h1 ref={h1Ref}>Melih Güven</h1>
        <button onClick={() => changeColor()}>Change Color</button>
    </>)


}

export default RefHookSample