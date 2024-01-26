import {  useDispatch, useSelector } from 'react-redux'
/*now understand the main secehma that is useSelector is 
used when we get data from the state 
and useDispatch is used when we maupulate the data of state
both of the state we get from the react-redux */

import {TypedUseSelectorHook} from 'react-redux'
/*these RootState and AppDispatch both are the types came from the 
store these are directly coping from the docomentation
now we import there */
import type { RootState, AppDispatch } from './store'
// these both types are came from store
/*
now we only onece asssigning the type to two variables
useAppDispatch and UseApselect to avoid repeting amonge
 */

export const useAppDispatch :()=> AppDispatch =useDispatch
//for other
export const useAppSelector :
     TypedUseSelectorHook<RootState>= useSelector

