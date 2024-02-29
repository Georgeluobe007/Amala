import React, { Component } from 'react'
import {ConsumerProvider} from './ContextApi'
import DrinkPage from './DrinkPage'
import '../ComponentsCSS/DrinkPage.css'
export default class Dinks extends Component {
  render() {
    return (
      <div className='data-fetch-drink'>
      <ConsumerProvider>
        {(value) => {
          console.log(value);
          return value.singleColdDrinks.map((drink) => {
            return <DrinkPage key={drink.id} value={drink} />
           })
        }}
      </ConsumerProvider>
    </div>
    )
  }
}
