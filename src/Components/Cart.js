import React from 'react'
import Header from './Header'
import HearderPicture from './HearderPicture'
import {ConsumerProvider} from './ContextApi'
import TotalSum from './TotalSum'
function Cart() {
  return (
    <div>
      <ConsumerProvider>
        {(value) => {
          const {carts} = value
          if(carts.length > 0){
            return (
             <div>
               <Header/>
               <HearderPicture value={value}/>
               <TotalSum value={value}/>
             </div>
            )
          }else{
            return (
              <h1>You are yet to take order from your customer</h1>
            )
          }
        }}
      </ConsumerProvider>
    </div>
  )
}

export default Cart