//import logo from './logo.svg';
//import './App.css';
import { Route, Routes } from "react-router-dom"


//---------------- TECHCAREER

import AddCategory from "./fetchSample/AddCategory";
import ProductList from "./fetchSample/ProductList";
import UserList from "./fetchSample/UserList";
import CategoryTable from "./stateSample/CategoryTable";

//import EffectSample from "./effectSample/EffectSample";
//import AddCategoryWithAxios from "./fetchSample/AddCategoryWithAxios"
//import HomePage from "./routerSample/HomePage";
//import AboutPage from "./routerSample/AboutPage";
//import ContactPage from "./routerSample/ContactPage";
//import ProductDetail from "./propsSample/ProductDetail";
//import PropClickEventSample from "./propsSample/PropClickEventSample";
//import SupplierList from "./propsSample/SupplierList";
//import ArrayStateSample from "./stateSample/ArrayStateSample";
//import InputStateSample from "./stateSample/InputStateSample";
//import StateSample from "./stateSample/StateSample"
//import StateSample2 from "./stateSample/StateSample2"
//import JsxElement from "./jsxSample/JsxElement";
//import JsxElementsEvent from "./jsxSample/JsxElementsEvent";
//import IfElseSample from "./jsxSample/IfElseSample";
//import MapSample from "./jsxSample/MapSample";
//import ObjectArraySample from "./jsxSample/ObjectArraySample";
//import ObjectSample from "./jsxSample/ObjectSample";
//import Content from "./template-1/Content";
//import Footer from "./template-1/Footer";
//import Header from "./template-1/Header";
//import NavBar from "./template-1/NavBar";




/* 
     <h1>----- Site Header -----</h1>

        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/hakkimizda' element={<AboutPage />}></Route>
          <Route path='/iletisim' element={<ContactPage />}></Route>
        </Routes>

      <h1>----- Site Footer -----</h1>   
*/



function App() {
  return (
    <>
      <ProductList />       
    </>
  );
}

export default App;
