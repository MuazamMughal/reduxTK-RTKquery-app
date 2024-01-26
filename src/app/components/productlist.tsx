'use client'
//due to hooks we use the use client
import React, { useState } from 'react'
import { useAppSelector ,useAppDispatch } from '../store/Hooks'
//now imorting useAppselector hook or geting data
//now importing addproduct function form product slice 
import { addProduct } from '../store/slices/product' 
import { addCart } from '../store/slices/cart'
import Cartlist from './cartlist'



const productlist = () => {
    ////now there we gona use the uesSelector hook
    /*now we goname createt variable then assign it to useAppSelector
    now this useSelector having function which contain parameter stat
    and and returing state */
    const productslist = useAppSelector((state => state.productArray))
    //for cart items
    const cart = useAppSelector((state)=>(state.cartArray))
    const [name, setName] = useState('')
    const [category, SetCategory] = useState('')
    const [qty, SetQty] = useState(0)

    // now we just name a variable for useapp dispatch
    const dispatch = useAppDispatch()


    return (
        <div>
            {/*now for addung data in products list  we have to make first
            inputes to take data from us and save in and display */}
            <div className=' flex flex-col items-center justify-center gap-6'>
                <span>Item name
                    <input
                        className=' p-3 bg-red-100 rounded-md'
                        type="text"
                        placeholder='item name'
                        value={name}
                        onChange={(e)=>setName(e.target.value)} />
                </span>
                <span>item category
                    <input
                        className=' p-3 bg-red-100 rounded-md'
                        type="text"
                        placeholder='item category' 
                        value={category}
                        onChange={(e)=>SetCategory(e.target.value)}/>
                </span>
                <span>item quantity
                    <input
                        className=' p-3 bg-red-100 rounded-md'
                        type="text"
                        placeholder='quantity'
                        value={qty}
                        onChange={(e:any)=>SetQty(e.target.value)} />
                </span>
                {/*now passing the adddispatch fuction to button on click
                we use appdispature to dispach and adding addproduct evnt to it
                then manupulate the addproduct fuction of product slice
                */}
                <button
                    className=' rounded-md bg-slate-500  w-24 font-bold'
                    onClick={()=>dispatch(addProduct({name :name ,category :category,qty:qty}))}>
                    add item
                </button>
            </div>
            productlist

            <div className='flex items-center
                     justify-evenly gap-6 '>
                {productslist.map((item, i) => {
                    return (
                        <div key={i} className=' rounded-md'>
                            <h1>name : {item.name}</h1>
                            <p>catagory : {item.category}</p>
                            <p>quantity : {item.qty}</p>
                            <button className=' bg-orange-400 w-32 mt-4 rounded-md font-bold'
                            onClick={()=>dispatch(addCart({name:item.name,category:item.category,qty:item.qty}))}
                         > add to cart</button>
                        </div>

                    )
                })}
            </div>
            
           
                
            


               
            
        </div>
    )
}

export default productlist