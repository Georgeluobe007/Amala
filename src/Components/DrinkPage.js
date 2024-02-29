import React, { Component } from 'react'
import {ConsumerProvider} from './ContextApi'
import '../ComponentsCSS/DrinkPage.css'
export default class DrinkPage extends Component {
  render() {
    const {id,nameOfFood,backGround,inCart} = this.props.value;
    window.onbeforeunload = ()=>"If you leave this page, you'll also leave the call";
    return (
        <div className='photoWork-drink'>
        <ConsumerProvider>
          {value => (
            <div>
              <button
               className='display-drink'
               style={{background:backGround}}
               onClick={() => value.sendDrinksToCart(id)}
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
