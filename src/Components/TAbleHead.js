import React from 'react'
 import '../ComponentsCSS/Printer.css'
function TAbleHead() {
  return (
    <div className='headerClass'>
        <table className='print'>
            <tr>
            <th className='head'>Item</th>
            <th className='head'>Price(unit)</th>
            <th className='head'>Qnty</th>
            <th className='head'>Subtotal</th>
            </tr>
          
        </table>
    </div>
  )
}

export default TAbleHead