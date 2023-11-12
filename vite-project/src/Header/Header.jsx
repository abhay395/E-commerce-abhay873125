import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useNavigate} from "react-router-dom"
import { SetSearchitem ,addCatgory} from '../Store/CategorySlice'
import Cart from './Cart'
function Header() {
    let  Cart = useSelector((state)=>state.CartId)
    const [searchitem,setsearchitem] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const Categorylength = useSelector((state)=>state.Categorys).length
    useEffect(()=>{
        fetch(`https://dummyjson.com/products?limit=100`)
    .then((respo)=>respo.json())
    .then((rep)=>{if(Categorylength<2)dispatch(addCatgory(rep.products))
    })
    .catch((error)=>console.log(error))
  },[]) 
    return (
        <div>
        <ul className='flex space-x-10 px-[45px] z-100 bg-cyan-700 shadow-2xl sticky py-2 text-cyan-300 ' >
            <Link to="" ><li>Home</li></Link>
            <Link to="category" ><li>Categary</li></Link>
            <Link to="Login" ><li>Login/signin</li></Link>
            <Link to="cart" ><li>Cart <span className='text-white' >{Cart && Cart.length} </span> </li></Link>
            {/* <li><input type="text" onChange={(e)=>setsearchitem(e.currentTarget.value)}  value={searchitem} placeholder='Search your product' className='p-1 rounded-sm outline-none mr-2 text-black ' /><button onClick={()=>{ dispatch(SetSearchitem(searchitem));navigate('searchitem'); }} className='rounded-sm bg-white p-1 text-black' >Search</button></li> */}
            <Link to="allproduct" ><li>All Product</li></Link>
        </ul>
        </div>
    )
}

export default Header
