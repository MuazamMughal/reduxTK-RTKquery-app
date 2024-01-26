//first import create slice from rtk
import { createSlice } from "@reduxjs/toolkit";

/*now the slice having 3 things which is 
* initial state:[]
* name : ....
* reducers:{} now in the store only the reduer can change
the state we passes all the function to maupulate the state
*/
//now im am gona make the interface for the initial state
interface ProductState {
    name:string,
    category : string,
    qty :number
}
//now making the initialstte outside
 const initialState : ProductState[] = [
    {name:"shoes" , category :"bata" , qty:2},
    {name:"sneekers gh m" , category :"nike" , qty:5},
    {name:"boots" , category :"gucci" , qty:3}
]
const productSlice = createSlice({

    name : "Product",
    initialState,
    /*this one thing to notice the most is that his reducer
    having s in the end is reducers */
    reducers : {
        //thi function in reduver having two parametes state and action
        addProduct(state , action){
           state.push(action.payload)
           /*the main thing is that state in this function is the initial state that we given
           in the top and the action is that data which dispatch puces to it 
           and which data is puches to it suddenly added tot state*/
        },
        // this is up to us that how many futions we wana make
        deleteProduct(state , action){}
    }
})
/*in that case we have to seperatily export
 the function in reducerS 
 exprt fuction with equals to productSclice.actions */
export const {addProduct ,deleteProduct}= productSlice.actions


// for the exporting we user reducer not having s
// along with that is s not as ordinary export having reducer in end
export default productSlice.reducer