import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
const Create = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    
    name: "",
    email: "",
    phone: "",
  });
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = values;

    // Simple validation
    if ( name && email && phone) {
      axios.post('http://localhost:3000/users', values)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
      alert("User has been Added.");
      navigate('/')
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <div className="mt-10 flex w-100 vh-100 justify-center items-center bg-light">
      <div className="w-50  border bg-white shadow-lg px-5 pt-3 pb-5 rounded">
        <h1 className="font-bold text-2xl mb-5">Add a User</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="name" className="text-xl mr-4 mb-2">
            Name:{" "}
          </label>
          <input
            onChange={(e)=>setValues({...values,name:e.target.value})}
            type="text"
            name="name"
            className="w-[400px] h-[40px] border-[2px] mb-5 rounded"
            placeholder="Enter Name"
          />
          <label htmlFor="email" className="text-xl mr-4 mb-2">
            Email:
          </label>
          <input
            type="email"
            onChange={(e)=>setValues({...values,email:e.target.value})}
            name="email"
            className="w-[400px] h-[40px] mb-5 border-[2px] rounded"
            placeholder="Enter Email"
          />
          <label htmlFor="email" className="text-xl mr-4 mb-2">
            Phone:
          </label>
          <input
            onChange={(e)=>setValues({...values,phone:e.target.value})}
            type="text"
            name="phone"
            className="w-[400px] h-[40px] border-[2px] mb-5 rounded"
            placeholder=" Enter Phone"
          />
          <div className="flex flex-row">
            <button className="btn mr-5">Submit</button>
            <Link to="/" className="btn ">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Create;
