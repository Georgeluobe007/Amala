import React from 'react'
import CartItem from './CartItem';
function HearderPicture({value}) {
   const {carts} = value;
  //  const {increase,decrease,remove,cartsubtotal} = value.carts;
  return (
    <div>
      {carts.map(items => {
        console.log();
        return <CartItem key={items.id} items={items} value={value}/>
    })}
    </div>
  )
}

export default HearderPicture
