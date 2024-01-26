'use client'
import { useAppDispatch, useAppSelector } from "../store/Hooks"
import { addCart, deleteCart } from "../store/slices/cart"

import React from 'react'

const Cartlist = () => {
    const dispatch = useAppDispatch()
    const cart = useAppSelector((state)=>(state.cartArray))
  return (
    <div>
         <div className='flex items-center
                     justify-evenly gap-6 '>
                {cart.map((item, i) => {
                    return (
                        <div key={i} className=' rounded-md'>
                            <h1>name : {item.name}</h1>
                            <p>catagory : {item.category}</p>
                            <p>quantity : {item.qty}</p>
                            <button className=' bg-orange-400 w-32 mt-4 rounded-md font-bold'
                            onClick={()=>dispatch(deleteCart(item.name) )}
                            > delete to cart</button>
                        </div>

                    )
                })}
            </div>





    </div>
  )
}

export default Cartlist
