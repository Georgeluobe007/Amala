import React from 'react'
 import '../ComponentsCSS/Printer.css'
function TAbleHead() {
  return (
    <div className='headerClass'>
        <table className='print'>
            <tr>
            <th className='head'>Item</th>
            <th className='head'>unit</th>
            <th className='head'>Qty</th>
            <th className='head'>SubT</th>
            </tr>
          
        </table>
    </div>
  )
}

export default TAbleHead