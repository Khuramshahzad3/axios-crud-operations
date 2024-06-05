/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { id } = useParams();
  useEffect(() => {
    axios.get('http://localhost:3000/users/' + id)
      .then(res => {
        setFormData(res.data)
      }
      )
      .catch(err => console.log(err));
  }, [id])
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const { name, email, phone } = formData;

    // Simple validation
    if (name && email && phone) {
      axios.put('http://localhost:3000/users/'+id, formData)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
      alert("User has been Updated.");
      navigate('/')
    } else {
      alert("Please fill in all the fields.");
    }
  }
  return (
    <div className="mt-10 flex w-100 vh-100 justify-center items-center bg-light">
      <div className="w-50  border bg-white shadow-lg px-5 pt-3 pb-5 rounded">
        <h1 className="font-bold text-2xl mb-5">Update User</h1>
        <form onSubmit={handleUpdate} className="flex flex-col">
          <label htmlFor="name" className="text-xl mr-4 mb-2">
            Name:{" "}
          </label>
          <input
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
            name="email"
            className="w-[400px] h-[40px] mb-5 border-[2px] rounded"
            placeholder="Enter Email"
          />
          <label htmlFor="email" className="text-xl mr-4 mb-2">
            Phone:
          </label>
          <input
            value={formData.phone}
            onChange={handleChange}
            type="text"
            name="phone"
            className="w-[400px] h-[40px] border-[2px] mb-5 rounded"
            placeholder=" Enter Phone"
          />
          <div className="flex flex-row">
            <button className="btn mr-5">Update</button>
            <Link to="/" className="btn bg-pink-500 hover:bg-pink-600">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Update