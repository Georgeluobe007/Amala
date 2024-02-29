import React from 'react'
import '../ComponentsCSS/Header.css'
function Header() {
  return (
    <div>
        <table className='d'>
            <tr>
                <th className='header'>Item Bought</th>
                <th className='header'>Price</th>
                <th className='header'>Quantity</th>
                <th className='header'>Remove</th>
                <th className='header'>Sub Total</th>
               
            </tr>
        </table>
    </div>
  )
}

export default Header