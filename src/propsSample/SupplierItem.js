import React from 'react'

function SupplierItem(props) {


    const removeSupplier = (id) => {

        props.deleteItem(id);

    }


  return (<>
        <div>
            <p>Company Name: {props.item.companyName}</p>
            <p>Contact Name: {props.item.contactName}</p>
            <p>Contact Tittle: {props.item.contactTitle}</p>
            <button onClick={() => removeSupplier(props.item.id)}>Remove</button>
        </div>
  
  </>
  )
}

export default SupplierItem