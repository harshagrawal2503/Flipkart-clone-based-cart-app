import React from 'react';


export default function Footer(props) {
   const darkstyle={
        color:"violet",
        'text-align':"center",
        'font-size':'2rem'
    }
  return (
    <div className='Row fixed-bottom'>
      <button className='btn btn-danger col-2' onClick={()=>{props.resetbutton();}} >Reset</button>

      <div className='col-8 bg-dark' style={darkstyle}> {props.totalamount}    </div>
        <button className='btn btn-primary col-2'>Pay Now</button>
      
    </div>
  )
}
