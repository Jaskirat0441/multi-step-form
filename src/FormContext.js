import React, { createContext, useState,useContext } from 'react'

const MultiStep= createContext();
const FormContext = ({children}) => {

    const [currStep,setCurrStep]= useState(1); 
    const [userData,setUserData]= useState([]);
     const [finalData,setFinalData]= useState([]);
     const [alert, setAlert] = useState({
        open:false,
        message:"",
        type:"success",
    })

    const submitUserData = ()=>{
      localStorage.setItem("user-data",JSON.stringify([...finalData,userData]));
      setFinalData(finalData=>[...finalData,userData]);
      setUserData("");
      console.log(finalData);
    }
  return (
    <MultiStep.Provider  value={{currStep,setCurrStep,userData,setUserData,finalData,setFinalData,alert,setAlert,submitUserData}}>
        {children}
    </MultiStep.Provider>
  )
}

export default FormContext;

export const FormState = () => {
    return useContext(MultiStep);
  };