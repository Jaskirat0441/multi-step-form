import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const DisplayData = () => {
    // to get data from local storage
const [userData, setUserData] = useState([]);
const navigate = useNavigate();

    const getUserData = ()=>{
        let data = localStorage.getItem('user-data');
        if(data){
        data= JSON.parse(localStorage.getItem('user-data'));
        setUserData(data);
        }
        console.log(data);


    }
    useEffect(() => {
        getUserData();
    }, [])
    
  return (
    <div className="m-2 overflow-scroll ">

    <table className="table table-dark table-striped">
  <thead>
    <tr>
      {/* <th scope="col">#</th> */}
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Username</th>
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
      <th scope="col">Country</th>
      <th scope="col">State</th>
      <th scope="col">City</th>
      <th scope="col">Portfolio link</th>
      <th scope="col">Github link</th>
      <th scope="col">Website </th>

    </tr>
  </thead>
  <tbody>
    {userData ?  userData.length > 0 && userData.map((val)=>(
        <tr key={val.email}  onClick={() => navigate(`/user/${val.email}`)}>
            <th scope="row">{val.name}</th>
            {/* <td>{val.name}</td> */}
            <td>{val.email}</td>
            <td>{val.username}</td>
            <td>{val.phone}</td>
            <td>{val.address}</td>
            <td>{val.country}</td>
            <td>{val.state}</td>
            <td>{val.city}</td>
            <td>{val.portfolio_link}</td>
            <td>{val.github_link}</td>
            <td>{val.website}</td>
        </tr>
    )) :  " No Data Found"}
  </tbody>
</table>
    </div>
  )
}

export default DisplayData