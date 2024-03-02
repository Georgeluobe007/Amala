import React,{useEffect} from 'react'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import '../ComponentsCSS/Header.css'
function CartItem({items,value}) {
    const {nameOfFood,price,total,count,id} = items;
    const {remove,increase,decrease} = value;
    window.onbeforeunload = ()=>"If you leave this page, you'll also leave the call";

    const num = total;
    const options = {maximumFractionDigits: 2} 
    const formattedNumber = Intl.NumberFormat("en-US",options).format(num);
    

   return (
                <div>
                <table className='d'>
                <tr>
                <th className='foodName'>{nameOfFood}</th>
                <th className='foodName'>{formattedNumber}</th>
                <th className='tableHead'>
                  <button className='decrease-btn' onClick={() => decrease(id)}>-</button>
                  <p className='foodName'>{count}</p>
                  <button className='decrease-btn' onClick={() => increase(id)}>+</button>
                </th>
                <th onClick={() => remove(id)} className='remove'>
                < RemoveShoppingCartIcon style={{width:"1.2rem",height:"1.2rem",color:"red"}}/>
                </th>
                <th className='foodName'>{formattedNumber}</th>
                </tr>
                </table>
             </div>
  )
}

export default CartItem