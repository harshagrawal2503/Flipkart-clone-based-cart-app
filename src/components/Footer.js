import React from 'react';


export default function Footer(props) {
   const darkstyle={
        color:"violet",
        'text-align':"center",
        'font-size':'2rem'
    }
  return (
    <div className='Row fixed-bottom'>
      <button className='btn btn-danger col-6' onClick={()=>{props.resetbutton();}} >Reset</button>

      <div className='col-6 bg-dark' style={darkstyle}> hello {props.totalamount}    </div>
       
    </div>
  )
}
