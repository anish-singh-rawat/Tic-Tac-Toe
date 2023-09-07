import React from 'react'

export default function Squre(props) {
  return (
    <div className='bg'
        onClick={props.onClick} 
        style={{
        border : "1px solid ", height: '100px', width : '100%', 
        display : 'flex', justifyContent : 'center', alignItems : 'center'
    }}>
        <h1>{props.value}</h1>
    </div>
  )
}
