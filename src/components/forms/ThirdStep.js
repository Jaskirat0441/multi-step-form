import React from "react";
import { FormState } from "../../FormContext";
import isUrl from 'is-url';


const ThirdStep = () => {
  const {
    currStep,
    setCurrStep,
    userData,
    setUserData,
    setAlert,
    submitUserData,
  } = FormState();

  const submitForm = () => {
    if (!userData.portfolio_link || !isUrl(userData.portfolio_link)) {
      setAlert({
        open: true,
        message: "Fill Portfolio Link properly",
        type: "warning",
      });
      return;
    }
    if (!userData.github_link || !isUrl(userData.github_link)) {
      setAlert({
        open: true,
        message: "Fill GitHub Link properly",
        type: "warning",
      });
      return;
    }
    if (!userData.website || !isUrl(userData.website) ){
      setAlert({
        open: true,
        message: "Fill Website properly",
        type: "warning",
      });
      return;
    }
    setAlert({
      open: true,
      message: `Register Successfully - ${userData.name} `,
      type: "success",
    });

    submitUserData();

    // setFinalData(finalData=>[...finalData,userData]);
    // setUserData("");
    setCurrStep(1);
    // add data to local storage
    
    // console.log(finalData);
  };
  // useEffect(()=>{
    // localStorage.setItem("user-data",JSON.stringify(finalData));
  // },[finalData])

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
          <label htmlFor="portfolio link" className="form-label">
            Portfolio link
          </label>
          <input
            type="text"
            value={userData.portfolio_link}
            onChange={(e) =>
              setUserData({ ...userData, portfolio_link: e.target.value })
            }
            className="form-control"
            id="portfolio link"
            aria-describedby="portfolio link"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="github link" className="form-label">
            Github link
          </label>
          <input
            type="text"
            value={userData.github_link}
            onChange={(e) =>
              setUserData({ ...userData, github_link: e.target.value })
            }
            className="form-control"
            id="github link"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="website " className="form-label">
            Website
          </label>
          <input
            type="text"
            value={userData.website}
            onChange={(e) =>
              setUserData({ ...userData, website: e.target.value })
            }
            className="form-control"
            id="website "
          />
        </div>
        <button
          type="button"
          onClick={() => setCurrStep(2)}
          className="btn btn-secondary mx-2"
        >
          Back
        </button>
        <button
          type="button"
          onClick={() => submitForm()}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ThirdStep;
