import React, { Component } from 'react'
import {ConsumerProvider} from './ContextApi'
import FoodPage from './FoodPage'
import '../ComponentsCSS/FoodPage.css'
export default class Food extends Component {
 
 render() {
   return (
       <div className='data-fetch-food'>
        <ConsumerProvider>
          {(value) => {
          return value.product.map((mapValue) => {
            return <FoodPage key={mapValue.id} value={mapValue} />
           })
          }}
        </ConsumerProvider>
      </div>
    
     
    )
  }
}

