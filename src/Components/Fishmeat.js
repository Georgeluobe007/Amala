import React, { Component } from 'react'
import {ConsumerProvider} from './ContextApi'
import FishMeatPage from './FishMeatPage'
import '../ComponentsCSS/FishMeatPage.css'
export default class Fishmeat extends Component {
  render() {
    return (
      <div className='data-fetch-meat'>
      <ConsumerProvider>
        {(value) => {
          console.log(value);
          return value.goatMeat.map((meat) => {
            return <FishMeatPage key={meat.id} value={meat} />
           })
        }}
      </ConsumerProvider>
    </div>
    )
  }
}
