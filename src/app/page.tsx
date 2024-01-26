'use client'
import Image from 'next/image'
import Productlist from './components/productlist'
import Link from 'next/link'
import Cartlist from './components/cartlist'
import {
  useCreatePostMutation,
   useGetAllpostQuery,
  useGetUserByIdQuery }
   from './store/slices/postApi'

export default function Home() {

  //for rtkquery destructure data by cover it with curly braces
 // const {data}= useGetAllpostQuery('')
  //now using query 2 
  //const {data} = useGetUserByIdQuery(4)
  // now for the mutation
 // const [updatePost,result] = useCreatePostMutation()
 //this is for transforming response
 const {data} = useGetAllpostQuery(4)
  return (
    <div>
      /* we just gona commented the resukts of redux toolkit for practicing RTK
      query
      hellow world
      <Productlist/>
      <div>
                this is the carted items
                <Cartlist/>
            </div> */
            <div className=' text-center m-8'>
              RTK query of redux toolkit
              

             button for post mutiontion
             <button
             //onClick={()=>updatePost({name:"bilal",id:111})}
             ></button>


            </div>



    </div>
  )
}
