import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Category from './Header/Category.jsx'
import { Provider } from 'react-redux'
import Home from './Header/Home.jsx'
import Login from './Header/Login.jsx'
import SingleCategory from './Header/SingleCategory.jsx'
import SingleProduct from './Header/SingleProduct.jsx'
import {store} from './Store/store.js' 
import Cart from './Header/Cart.jsx'
// import SearchitemArea from './Header/SearchitemArea.jsx'
import AllProducts from './Header/AllProducts.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home/>} />
      <Route path='category' element={<Category />}/>
      <Route path='/:id' element={<SingleCategory/>} />
      <Route path='/al/:name' element={<SingleProduct/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/allproduct' element={<AllProducts/>} />
      {/* <Route path='/searchitem' element={<SearchitemArea/>} /> */}
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store} >
    <RouterProvider router={router} />
    </Provider>
)
