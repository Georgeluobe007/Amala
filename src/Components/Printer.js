import React, { Component } from 'react'
import {ConsumerProvider} from './ContextApi'
import TAbleHead from './TAbleHead'
import '../ComponentsCSS/Printer.css'
export default class Printer extends Component {
  render() {
    const makeprinter = () => {
      const btn = document.getElementById("btn");
      if(btn){
        btn.style.display = "none"
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
              return(
                  <div>
                    <div>{carts.map(mapValue => {
                      return (
                        <div className='bottomWork'>
                          <table className='print'>
                          <tr>
                          <th className='bottom'>{mapValue.nameOfFood}</th>
                          <th className='bottom'>{mapValue.price}</th>
                          <th className='bottom'>{mapValue.count}</th>
                          <th className='bottom'>{mapValue.total}</th>
                          </tr>
                          </table>
                        </div>
                      )
                    })}</div>
                    <div className='total-btn'>
                    <h4>TOTAL:{cartsubtotal}</h4>
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
