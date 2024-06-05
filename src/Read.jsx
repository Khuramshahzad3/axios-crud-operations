

/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {
  const [data, setData] = useState([])
  const { id } = useParams();
  useEffect(() => {
    axios.get('http://localhost:3000/users/' + id)
      .then(res =>{
        setData(res.data)
        console.log(res.data)
      } 
    )
      .catch(err => console.log(err));
  }, [id])
  return (
    <div className='flex w-full h-100 justify-center items-center mt-10'>
      <div className='w-[500px] h-[250px] border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h3 className='font-bold text-2xl mb-4'>Details of User</h3>
        <div className='mb-5'>
          <strong>Name: {data.name}</strong>
        </div>
        <div className='mb-5'>
          <strong>Email: {data.email}</strong>
        </div>
        <div className='mb-5'>
          <strong>Phone: {data.phone}</strong>
        </div>
        <Link to={`/update/${id}`} className='btn  '>Edit</Link>
        <Link to="/" className='btn bg-pink-500 hover:bg-pink-600 ms-4'>Back</Link>
      </div>
    </div>
  )
}

export default Read