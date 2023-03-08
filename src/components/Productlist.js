import React from 'react';
import Product from './components/Product';

export default function Productlist(props) {
  return (
    props.productlist.map((product,i)=>{
        return <Product product={product} key={i} 
                incrementQuantity={props.incrementQuantity} index={i} 
                decrementQuantity={props.decrementQuantity} removeItem={props.removeItem} />
    })
  )

}
