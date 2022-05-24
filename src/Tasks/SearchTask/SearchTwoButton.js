import React, { useState } from 'react'
import { categories } from '../../data/categories'


import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Search from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DeleteForever from '@mui/icons-material/DeleteForever';
import Restore from '@mui/icons-material/Restore';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function CategoryTable() {


    const [categotyList, setCategoryList] = useState(categories);
    const [searchByName, setSearchByName] = useState('')//----------> Search With Button


    const removeAll = () => {

        setCategoryList([]);
    }

    const DeleteItem = (catId) => {
        let newCategoryList = categotyList.filter(item => item.id !== catId);
        setCategoryList(newCategoryList);
    } 

    const searchCategories = (data) => {

        let searchData = data.toLowerCase().trim();
        let newCategories = categotyList.filter(q => q.name.toLowerCase().includes(searchData));

        setCategoryList(newCategories);
    }

    //<------------------[ Search With Button ]--------------------->
    const searchCategoriesButton = (data) => {
        setSearchByName(data);
    }

    const searchWithButton = () => {

        let searchData2 = searchByName.toLowerCase().trim();
        let newCategories2 = categotyList.filter(q => q.name.toLowerCase().includes(searchData2));
        setCategoryList(newCategories2)
    }

    const clearSearch = () => {

        removeAll();
        loadData();
        setSearchByName([]);
    }
    //<------------------------------------------------------------->

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
        <table>
            <tr>
                <td>
                    <TextField id="outlined-basic" label="Search.." variant="outlined" onChange={(e) => searchCategories(e.target.value)} />
                </td>
                <td>
                    <TextField id="outlined-basic" label="Search With Button.." variant="outlined" value={searchByName} onChange={(e) => searchCategoriesButton(e.target.value)} />
                </td>
                <td>
                    <ButtonGroup variant="contained" aria-label="outlined button group">
                        <Button variant="contained" endIcon={<Search />} onClick={() => searchWithButton()}>Search</Button>
                        <Button variant="contained" onClick={() => clearSearch()}>X</Button>
                    </ButtonGroup>
                </td>
               
                <td>
                    <Button variant="contained" endIcon={<ArrowDropUpIcon />}  onClick={() => orderBy()}>Order By</Button>
                </td>
                <td>
                    <Button variant="contained" endIcon={<ArrowDropDownIcon />} onClick={() => orderByDesc()}>Order By Desc</Button>
                </td>
               
            </tr>
        </table>
    </div>

    {/*  
    ---------------------------------------------------> [ OLD TABLE ]
    <table>
    <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Description</td>
    </tr>
    
    categotyList && categotyList.map((item,key) => {

            return <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                    <IconButton aria-label="delete" color="error" size="small" onClick={()=> DeleteItem(item.id)} >
                            <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </td>
            </tr>

        })
    </table>*/}
    
        <div>
           
        <Table sx={{ minWidth: 100, width: 850, border: 2, borderColor: "lightgray", marginTop:1 }} aria-label="simple table">
            <TableHead>
            <TableRow sx={{ backgroundColor: "lightblue" }}>
                <TableCell>ID</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Delete</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
          { categotyList && categotyList.map((item,key) => (
            <TableRow >
              <TableCell component="th" scope="row">{item.id}</TableCell>
              <TableCell align="left">{item.name}</TableCell>
              <TableCell align="left">{item.description}</TableCell>
              <TableCell align="left">
                <IconButton aria-label="delete" color="error" size="small" onClick={()=> DeleteItem(item.id)} >
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  
        </div>
        <div style={{marginTop: 20}}>
            <table>
                 <td>
                    <Button variant="outlined" startIcon={<Restore />} onClick={() => loadData()}>Load Data</Button>
                </td>
                <td>
                    <Button variant="outlined" startIcon={<DeleteForever />} onClick={() => removeAll()}>Clear All</Button>
                </td>
            </table>
             
        </div>

        
        
    </>
  )
}

export default CategoryTable