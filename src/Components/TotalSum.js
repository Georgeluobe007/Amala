import React from 'react'
import '../ComponentsCSS/Header.css'
import {useNavigate} from 'react-router-dom'
function TotalSum({value}) {
    const {cartsubtotal,clear} = value;
    const navigate = useNavigate();
    const num = cartsubtotal;
    const options = {maximumFractionDigits: 2} 
    const formattedNumber = Intl.NumberFormat("en-US",options).format(num);
     
  return (
    <div className='con'>
        <div className='totalSum'>
        <h2 className='myh2'>TOTAL SUM:<span>&#8358;</span>{formattedNumber}</h2>
        <div className='clearANDprint'>
        <button onClick={() => clear()} className='clear'>Clear</button>
        <button onClick={() => navigate("/printer")} className='sendTOprint'>Print</button>
        </div>
        </div>
    </div>
  )
}

export default TotalSum