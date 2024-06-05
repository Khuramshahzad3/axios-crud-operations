
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [])

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to delete?")
    if (confirm) {
      axios.delete(`http://localhost:3000/users/${id}`)
        .then(res => {
          setData(prevData => prevData.filter(user => user.id !== id));
        })
        .catch(err => console.log(err));
    }
  }
  return (
    <div className='flex flex-col justify-center items-center w-full mt-5'>
      <h1 className='font-bold text-2xl '>List of All Users</h1>
      <div className="w-[1000px] rounded bg-white border shadow p-4 mt-5">
        <div className="flex justify-end">
          <Link to={"/create"} className=' bg-green-500 text-white p-3 rounded'>Add</Link>
        </div>
        <div>
          <table className='w-full border-collapse mt-4'>
            <thead>
              <tr>
                <th className='border-b-3 p-2 bg-blue-100'>Id</th>
                <th className='border-b-3 p-2 pr-[70px] bg-blue-200'>Name</th>
                <th className='border-b-3 p-2 pr-[170px] bg-blue-300'>Email</th>
                <th className='border-b-3 p-2 pr-[70px] bg-blue-400'>Phone</th>
                <th className='border-b-3 p-2 pr-[150px] bg-blue-500'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((d, i) => {
                  return (
                    <tr key={i} className='border-b'>
                      <td className='p-2'>{d.id}</td>
                      <td className='p-2'>{d.name}</td>
                      <td className='p-2'>{d.email}</td>
                      <td className='p-2'>{d.phone}</td>
                      <td className='p-5 flex space-x-2'>
                        <Link to={`/read/${d.id}`} className=' bg-blue-500 text-white p-2 rounded hover:bg-blue-600'>Read</Link>
                        <Link to={`/update/${d.id}`} className=' bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600'>Edit</Link>
                        <button onClick={(e) => { handleDelete(d.id) }} className=' bg-red-500 text-white p-2 rounded hover:bg-red-600 mb-'>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home
