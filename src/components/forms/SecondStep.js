import React from 'react'
import { FormState } from '../../FormContext';

const SecondStep = () => {
  const { currStep, setCurrStep,userData,setUserData,setAlert} = FormState();

  const handleSecondStep =()=>{
    if(!userData.phone || userData.phone.length !=10){
      setAlert({
          open:true,
          message:"Fill Phone Number properly or length should be equal to 10",
          type:'warning',
          
        });
        return 
  }if(!userData.address ){
    setAlert({
        open:true,
        message:"Fill Address properly",
        type:'warning',
        
      });
      return 
}if(!userData.country){
  setAlert({
      open:true,
      message:"Fill Country properly",
      type:'warning',
      
    });
    return 
}
if(!userData.state){
  setAlert({
      open:true,
      message:"Fill State properly",
      type:'warning',
      
    });
    return 
}if(!userData.city){
  setAlert({
      open:true,
      message:"Fill City properly",
      type:'warning',
      
    });
    return 
}
setAlert({
  open:true,
  message:"Form Second Step Done!",
  type:'success',
  
});
setCurrStep(3)
  }
  return (
    <div className="container my-5">
      <div className="container">
        <label for="customRange2" className="form-label">
             </label>

        <input
          type="range"
          className="form-range"
          min="1"
          max="3"
          value={currStep}
          id="customRange2"
        ></input>
      </div>
        <form>
  <div className="mb-3">
    <label htmlFor="phone" className="form-label">Phone</label>
    <input type="number"  value={userData.phone} onChange={(e)=>setUserData({...userData,"phone":e.target.value})} className="form-control" id="phone" aria-describedby="phone"/>
  </div>
  <div className="mb-3">
    <label htmlFor="address" className="form-label">Address</label>
    <input type="text"  value={userData.address} onChange={(e)=>setUserData({...userData,"address":e.target.value})} className="form-control" id="address"/>
  </div>
  <div className="mb-3">
    <label htmlFor="country" className="form-label">Country</label>
    <input type="text"   value={userData.country} onChange={(e)=>setUserData({...userData,"country":e.target.value})} className="form-control" id="country"/>
  </div>
  <div className="mb-3">
    <label htmlFor="state" className="form-label">State</label>
    <input type="text"  value={userData.state} onChange={(e)=>setUserData({...userData,"state":e.target.value})}  className="form-control" id="state"/>
  </div>
  <div className="mb-3">
    <label htmlFor="city" className="form-label">City</label>
    <input type="text"  value={userData.city} onChange={(e)=>setUserData({...userData,"city":e.target.value})} className="form-control" id="city"/>
  </div>
  <button type="button" onClick={()=>setCurrStep(1)} className="btn btn-secondary mx-2">Back</button> 
  <button type="button" onClick={()=>handleSecondStep()} className="btn btn-primary">Next</button>
  {/* <button type="button" className="btn btn-primary">Next</button> */}
</form>
    </div>
  )
}

export default SecondStep