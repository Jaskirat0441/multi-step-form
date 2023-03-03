import React from 'react'
import { FormState } from '../../FormContext';

const FirstStep = () => {
  const { currStep, setCurrStep,userData ,setUserData,setAlert} = FormState();
        // console.log(userData.name.length);

        const handleFirstStep =()=>{

            if(!userData.name || userData.name.length<3){
                setAlert({
                    open:true,
                    message:"Fill Name properly or length should be greater than 3",
                    type:'warning',
                    
                  });
                  return 
            }
            if(
                !userData.email ||
                !userData.email.includes("@")  ||
                !userData.email.includes(".")  ||
                userData.email.lastIndexOf(".") >= userData.email.length - 3 || 
                    userData.email.indexOf('@') === 0
            ){
                setAlert({
                    open:true,
                    message:"Fill Valid Email",
                    type:'warning',
                    
                  });
                  return 
            }
            if(!userData.username || userData.username.length<3){
                setAlert({
                    open:true,
                    message:"Fill Username properly or length should be greater than 3",
                    type:'warning',
                    
                  });
                  return 
            }

            setAlert({
                open:true,
                message:"Form First Step Done!",
                type:'success',
                
              });
              setCurrStep(2)

            // console.log("frisr")
        }
  return (
    <div className="container my-5">
      <div className="container">
        <label htmlFor="customRange2" className="form-label">
             </label>
        <input
          type="range"
          className="form-range"
          min="1"
          max="3"
          value={currStep}
          id="customRange2"
        />
      </div>
        <form>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="name" value={userData.name} onChange={(e)=>setUserData({...userData,"name":e.target.value})} className="form-control" id="name" aria-describedby="nameHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" value={userData.email} onChange={(e)=>setUserData({...userData,"email":e.target.value})} className="form-control" id="email"/>
  </div>
  <div className="mb-3">
    <label htmlFor="username" className="form-label">Username</label>
    <input type="text"  value={userData.username} onChange={(e)=>setUserData({...userData,"username":e.target.value})} className="form-control" id="username"/>
  </div>
  
  <button type="button" onClick={()=>handleFirstStep()} className="btn btn-primary">Next</button>
</form>
    </div>
  )
}

export default FirstStep