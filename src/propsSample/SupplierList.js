import React, { useState } from 'react'
 
import { suppliers } from '../data/suppliers'
import SupplierItem from './SupplierItem'

function SupplierList() {


const [supplierList, setSupplierList] = useState(suppliers);

const deleteItem = (id) => {
    console.log(id)
    let newSuppliers = supplierList.filter(q => q.id != id);
    setSupplierList(newSuppliers)
    console.log(newSuppliers)
}

  return (
     <>
        <ul>
            {
                suppliers && supplierList.map((item, key) =>{

                    return <SupplierItem item={item} deleteItem={deleteItem} />

                })


            }

        </ul>
     </>
  )
}

export default SupplierList