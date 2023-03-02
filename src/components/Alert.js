import React from 'react'
import { FormState } from '../FormContext';

const Alert = () => { 
  const { alert,setAlert} = FormState();
    if(alert.open){
        setTimeout(()=>{
            setAlert({
        open:false,
      })
        },3000);
    }
  return (
    <div className={`container alert alert-${alert.type} d-flex alert_show justify-content-center`}role="alert">
    <strong>{alert.message}</strong>
  </div>
  )
}

export default Alert