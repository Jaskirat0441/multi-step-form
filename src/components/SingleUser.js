import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleUser = () => {
  const{useremail}= useParams();
const [userData, setUserData] = useState([]);
  console.log(useremail);
  const getUserData = ()=>{
    let data = localStorage.getItem('user-data');
    if(data){
    data= JSON.parse(localStorage.getItem('user-data'));
    setUserData(data);
    }
    console.log(data);

}
const singleUser = userData && userData.find((prop) => prop.email === useremail);
console.log(singleUser)
useEffect(() => {
    getUserData();
}, [])

  return (
    <div className="container">
        {singleUser  && 
        <>
       <h1>
         Data of {"->"+singleUser.name}
        </h1>
        <ul className="list-group">
  <li className="list-group-item">Name : {singleUser.name}</li>
  <li className="list-group-item">Email : {singleUser.email}</li>
  <li className="list-group-item">UserName : {singleUser.username}</li>
  <li className="list-group-item">Phone : {singleUser.phone}</li>
  <li className="list-group-item">Address : {singleUser.address}</li>
  <li className="list-group-item">Country : {singleUser.country}</li>
  <li className="list-group-item">State : {singleUser.state}</li>
  <li className="list-group-item">City : {singleUser.city}</li>
  <li className="list-group-item">Portfolio link
 : {singleUser.portfolio_link}</li>
  <li className="list-group-item">Github link
 : {singleUser.github_link}</li>
  <li className="list-group-item">Website  : {singleUser.website}</li>
</ul>
        </>
}
    </div>
  )
}

export default SingleUser