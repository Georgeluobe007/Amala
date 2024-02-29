import React, { Component } from 'react'
import {ConsumerProvider} from './ContextApi'
import '../ComponentsCSS/FishMeatPage.css'
export default class FishMeatPage extends Component {
  render() {
    const {id,nameOfFood,backGround,inCart} = this.props.value
    window.onbeforeunload = ()=>"If you leave this page, you'll also leave the call";
    return (
        <div className='photoWork-meat'>
        <ConsumerProvider>
          {value => (
            <div>
              <button
              className='display-food'
               style={{background:backGround}}
               onClick={() => value.sendMeatToCart (id)}
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
