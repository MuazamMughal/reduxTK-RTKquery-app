//making another slice there for cart

import { createSlice } from "@reduxjs/toolkit";
//creating interface
interface CartState {
    name:string,
    category:string,
    qty:number
}
//now the main goal is to add adat in the initialstate to add to cart
//following the same procedure as we follows to addproductw in product slice in list
const initialState :CartState[] = []


const cartSlice =createSlice({
    name :"cart",
    initialState,
    reducers :  {
        addCart(state ,action){
        
            //this step is only for increment in counter
            const obj = state.find(item=>item.name==action.payload.name)
            if (obj) {
                ++obj.qty
                const newState = state.filter(item=>item.name!==obj.name)
                state =[...newState,obj]
                return 
            }
            //till this point
            state.push(action.payload)

        },


        deleteCart(state , action){
            return state.filter(item=>item.name!==action.payload)
        }

    },

})
//now exporting the reducers function first
export const {addCart , deleteCart} = cartSlice.actions

//now exporting the cartSclice defaultly having reducer in end

export default  cartSlice.reducer


/*now the next tast is to make the store in stor folder
1 : making store folder within store create slice forder 
2: then make the slices in slicers folder then
3 : creating stor in store folder
4: now making the providers for the store in app directry
and wraper also
5: now making the hooks.tsx in the store folder
6: now we geting the data using  useSelectore hook on home page
fist we goname make the componente name producte list then display
it to the home page
7: now adding data into product clice using appdisppacher
8:now addproduct to the addtocart in cart clice




*/