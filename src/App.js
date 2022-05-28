//import logo from './logo.svg';
//import './App.css';
import { Route, Routes, Link } from "react-router-dom"


//---------------- TECHCAREER



//import SearchTwoButton from './tasks/SearchTask/SearchTwoButton'
//import AddCategory from "./fetchSample/AddCategory";
//import ProductList from "./fetchSample/ProductList";
//import UserList from "./fetchSample/UserList";
//import CategoryTable from "./stateSample/CategoryTable";
//import EffectSample from "./effectSample/EffectSample";
//import AddCategoryWithAxios from "./fetchSample/AddCategoryWithAxios"
import HomePage from "./routerSample/HomePage";
import AboutPage from "./routerSample/AboutPage";
import ContactPage from "./routerSample/ContactPage";
import NoMatch from "./routerSample/NoMatch";
import ProductList from "./routerSample/ProductList";
import ProductDetail from "./routerSample/ProductDetail";
import DataDisplay from "./materialSample/DataDisplay";
import ProductDataGrid from "./materialSample/ProductDataGrid";
import AutocomplateSample from "./materialSample/AutocomplateSample";
import { useContext } from "react";
import { cartContext } from "./store/cartContext";
import CartPage from "./routerSample/CartPage";
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



function App() {

  

  //context'i kullanma
  const {cart, setCart} = useContext(cartContext);
  //? eslint-disable-next-line

  //* Toplam Yazıdırma
  let totalPrice = 0;

  cart.forEach(e => {
      totalPrice = totalPrice + (e.price * e.quantity)
  });
  
  return (<>
      <h1>----- Site Header -----</h1>
      <h1>Cart Count: {cart.length}</h1>
      <h1>Total Price: {totalPrice.toFixed()}</h1>

      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/hakkimizda'>About</Link></li>
        <li><Link to='/iletisim'>Contact</Link></li>
        <li><Link to='/urunler'>Products</Link></li>
        <li><Link to='/datadisplay'>Material Data Display</Link></li>
        <li><Link to='/productdatagrid'>Product Data Grid</Link></li>
        <li><Link to='/autocomplate'>Auto Complate</Link></li>
        <li><Link to='/cart'>Cart Sample</Link></li>

      </ul>



      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/hakkimizda' element={<AboutPage />}></Route>
        <Route path='/iletisim' element={<ContactPage />}></Route>
        <Route path='/urunler' element={<ProductList />}></Route>
        <Route path='/urunler/:id' element={<ProductDetail />}></Route>
        <Route path='/datadisplay' element={<DataDisplay />}></Route>  
        <Route path='/productdatagrid' element={<ProductDataGrid />}></Route>
        <Route path='/autocomplate' element={<AutocomplateSample />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Routes>
      <h1>----- Site Footer -----</h1>
      </>);
}

export default App;
