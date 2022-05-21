import React, { useState } from 'react'
import { categories } from '../data/categories'




function CategoryTable() {

    const [categotyList, setCategoryList] = useState(categories);
    const [searchByName, setSearchByName] = useState('')
    //sabit datalar için ayrı state açılabilir.

    const RemoveAll = () => {

        setCategoryList([]);
    }

    const DeleteItem = (catId) => {
        let newCategoryList = categotyList.filter(item => item.id !== catId);
        setCategoryList(newCategoryList);
    } 

    const searchCategories = (data) => {

        let searchData = data.toLowerCase().trim();
        //boşlukları kaldırmak için trim metodu kullandık.
        
        let newCategories = categotyList.filter(q => q.name.toLowerCase().includes(searchData));
        //includes -> true or false döner. elimizdeki veri ile gelen verinin hepsini küçültüp eşleştirdik.

        setCategoryList(newCategories);
    }

    const orderBy = () => {
        let sortCategories = categotyList.sort((a, b) => {
            let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();

            if(fa < fb) {
                return -1;
            }
            if(fa > fb) {
                return 1;
            }
            return 0;
        });

        setCategoryList([...sortCategories])
    }

    const orderByDesc = () => {
        let sortCategories = categotyList.sort((a, b) => {
            let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();

            if(fa < fb) {
                return 1;
            }
            if(fa > fb) {
                return -1;
            }
            return 0;
        });

        setCategoryList([...sortCategories])
    }

    const loadData = () => {
        setCategoryList(categories)
    }

  return (
    <>
    <div>
        <input type="text" placeholder='Search..' onChange={(e) => searchCategories(e.target.value)}/>
    </div>
    <div>
        {/*__NOTE --> Lodash - UnderScore Libraries */}
        <button onClick={() => orderBy()}>Order By</button>
        <button onClick={() => orderByDesc()}>Order By Desc</button>
        <button onClick={() => loadData()}>Load Data</button>
    </div>

    <table>
        <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Description</td>
        </tr>

    {
        categotyList && categotyList.map((item,key) => {

            return <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td><button onClick={()=> DeleteItem(item.id)}>Delete</button></td>
            </tr>

        })
    }

    </table>
        <div>
            <button onClick={() => RemoveAll()}>Remove All</button>
        </div>
        


    </>
  )
}

export default CategoryTable