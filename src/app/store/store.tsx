//first create store using configure store
import { configureStore } from "@reduxjs/toolkit";
//now import all the slices
import productSlice from "./slices/product";
import cartSlice from "./slices/cart";
//immport the postapi slice
import { postApi } from "./slices/postApi";
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore({
    //now in this object of configureStore we make reducer
    reducer:{
        //now we have define two states or data for 2 slices
        productArray : productSlice,
        cartArray : cartSlice,
        // for configuing the api query slice we must use the 
        //state query along with middleware
        [postApi.reducerPath]: postApi.reducer

    },
    //here we make the middle ware for the rtk query
    //we just copy that from our rtk docs
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(postApi.middleware)
})

//now export the rootstate and adddispatch from store itself
//we just copy that from docomentaton of store
//i write it later
export type RootState = ReturnType<typeof store.getState>

//infered type : {post poststate, coments : comentsState}
export type AppDispatch = typeof store.dispatch


//this is optional for rtk query configration in store in new doc it is not avalible
setupListeners(store.dispatch)