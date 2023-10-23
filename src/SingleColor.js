import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleColor = ({rgb,weight,index}) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb)
   
  const handleClick = () =>{
    setAlert(true);
    navigator.clipboard.writeText(hex)
    toast.success('Copied to Clipboard !', {
      position: toast.POSITION.TOP_CENTER
  });
  }
useEffect(()=>{
const timeout = setTimeout(()=>{
  setAlert(false);
},1500)
return ()=> clearTimeout(timeout)
},[alert])

  return (
    <article className={`color ${index>10 && 'color-light'}`} style={{backgroundColor: `rgb(${bcg})`}} onClick={handleClick}>
     <p className='perecent-value'>
      {weight}%
     </p>
     <p className='color-value'>
      {hex}
     </p>
     {alert && <ToastContainer
/>}
    </article>
  )
}

export default SingleColor
