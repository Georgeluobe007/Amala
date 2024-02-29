import React, { Component } from 'react'
import '../ComponentsCSS/FoodPage.css'
import {ConsumerProvider} from './ContextApi'
export default class FoodPage extends Component {
  render() {
    window.onbeforeunload = ()=>"If you leave this page, you'll also leave the call";
    const {id,nameOfFood,backGround,honover,inCart} = this.props.value;
    return (
      <div className='photoWork-food'>
        <ConsumerProvider>
          {value => (
            <div className='fitScreen'>
              <button className='display-food'
               style={{background:backGround}}
               onClick={() => value.sendFoodToCart(id)}
               disabled={inCart ? true:false}
               >
                {nameOfFood}</button>
            </div>
          )}
        </ConsumerProvider>
      
       </div>
      
    )
  }
}
