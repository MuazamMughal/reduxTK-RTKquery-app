"use client"
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'

const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        {/*the main thing is that in this componnt 
        we wrape the children with the provider that came from 
        react redux
        and in the layout we gona wrap the children with the 
        name of this component called providerS*/}
        <Provider store={store} >
            {children}
        </Provider>


    </div>
  )
}

export default Providers