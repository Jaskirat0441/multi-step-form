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
  return (
    <MultiStep.Provider  value={{currStep,setCurrStep,userData,setUserData,finalData,setFinalData,alert,setAlert}}>
        {children}
    </MultiStep.Provider>
  )
}

export default FormContext;

export const FormState = () => {
    return useContext(MultiStep);
  };