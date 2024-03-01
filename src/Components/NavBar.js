import React from 'react'
import '../ComponentsCSS/NavBar.css'
import {Link} from 'react-router-dom'
function NavBar() {
  return (
    <div className='container'>
       <div className='container_div'>
       <div className='cart'>
        <Link className='linkcart' to='/cart'  id='con-div'>Check Cart</Link>
       </div>
       <div className='food'>
        <Link className='linkFood' to='/food'>Food</Link>
       </div>
        <div className='meatfish'>
        <Link className='linkmeatfish' to='/meatfish'>Meat/Fish</Link>
        </div>
        <div className='drink'>
        <Link className='linkdrink' to='/drink'>Drinks</Link>
       </div>
      </div>
    </div>
  )
}

export default NavBar