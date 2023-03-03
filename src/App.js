import "./App.css";
import Header from "./components/Header";
import FirstStep from "./components/forms/FirstStep";
import SecondStep from "./components/forms/SecondStep";
import ThirdStep from "./components/forms/ThirdStep";
import { FormState } from "./FormContext";
import Alert from "./components/Alert";
import DisplayData from "./components/DisplayData";
import { Route, Routes } from "react-router-dom";
import SingleUser from "./components/SingleUser";

function App() {
  const { currStep,alert } = FormState();
  // console.log(currStep);
  return (
    <>
      <Header />

      <p className="fs-1 text-center">Multi-Step Form </p>
        {alert.open? <Alert/> : ""}
      <Routes>
      <Route path="/" element={currStep === 1 ? <FirstStep/> : currStep ===2 ? <SecondStep/> :<ThirdStep/>}/>
      <Route path="/user/:useremail" element={<SingleUser/>}/>
      <Route path="/display" element={<DisplayData/>}/>
      </Routes>
    </>
  );
}

export default App;
