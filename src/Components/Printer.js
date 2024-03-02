import React, { Component } from 'react'
import {ConsumerProvider} from './ContextApi'

import TAbleHead from './TAbleHead'
import '../ComponentsCSS/Printer.css'
export default class Printer extends Component {
  
  render() {
    const makeprinter = () => {
      const btn = document.getElementById("btn");
      const conDiv = document.getElementById("con-div");
     
      if(btn){
        btn.style.display = "none"
        
      }else{
       conDiv.style.display = "none"
      }
   
     window.print();
     
    }
    return (
      <div className='printer'>
     <div className='printerWork'>
     <TAbleHead/>
        <ConsumerProvider>
            {(value) => {
              const {carts, cartsubtotal} = value;
              const num = cartsubtotal;
              const options = {maximumFractionDigits: 2} 
              const formattedNumber = Intl.NumberFormat("en-US",options).format(num);
              // const Cartnum = carts.price;
              // const Cartoptions = {maximumFractionDigits: 2} 
              // const CartformattedNumber = Intl.NumberFormat("en-US",options).format(num);
               return(
                  <div>
                    <div>{carts.map((mapValue,key) => {
                      const Pricenum = mapValue.price;
                      const Priceoptions = {maximumFractionDigits: 2} 
                      const PriceformattedNumber = Intl.NumberFormat("en-US",Priceoptions).format(Pricenum);
                      const Totalnum = mapValue.total;
                      const Totaloptions = {maximumFractionDigits: 2} 
                      const TotalformattedNumber = Intl.NumberFormat("en-US",Totaloptions).format(Totalnum);
                      return (
                          <div key={key} className='bottomWork'>
                          <table className='print'>
                          <tr>
                          <th className='bottom'>{mapValue.nameOfFood}</th>
                          <th className='bottom'>{PriceformattedNumber}</th>
                          <th className='bottom'>{mapValue.count}</th>
                          <th className='bottom'>{TotalformattedNumber}</th>
                          </tr>
                          </table>
                        </div>
                      )
                    })}</div>
                    <div className='total-btn'>
                    <h4 className='total'>TOTAL:<span>&#8358;</span>{formattedNumber}</h4>
                    
                    <button onClick={makeprinter} className='printBtn' id='btn'>Print</button>
                    </div>
                  </div>
              )

            }}
        </ConsumerProvider>
     </div>
      </div>
    )
  }
}
