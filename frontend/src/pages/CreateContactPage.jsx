import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const CreateContactPage = () => {
  
  const [formData, setFormData] = useState({
    contactName: "", 
    contactPhone: "", 
    contactEmail: ""
  });

  function changeHandler(event) {
    setFormData( prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    } )
  }

  async function submitHandler(event) {
    event.preventDefault();

    // send this data to database
    let sendData = () => {
        axios.post('/api/v1/createContact', formData)
        .then( (res) => {
            console.log('data sent')
            toast.success("Contact created")
        })
        .catch( (err) => {
            console.log(err.data)
            toast.error("Error in creating contact")
        })
    }
    sendData();
  }

  return (
    <div className='flex flex-col w-1/3 mx-auto text-center gap-10 mt-10'>
        <div className='flex flex-col '>
            <div>
                <p className='text-3xl font-extrabold mb-10'>Create a new contact</p>
            </div>
            <div className='flex flex-col w-full'>
                <form onSubmit={submitHandler}
                    className='flex flex-col gap-2' 
                >
                    <input 
                        type='text' 
                        placeholder='your name' 
                        onChange={changeHandler} 
                        name='contactName' 
                        value={formData.contactName}
                        className='h-10 border-solid border border-blue-600 p-2 rounded-lg'
                    ></input>
                
                
                    <input 
                        type='text' 
                        placeholder='phone number' 
                        onChange={changeHandler} 
                        name='contactPhone' 
                        value={formData.contactPhone}
                        className='h-10 border-solid border border-blue-600 p-2 rounded-lg'
                    ></input>
                
                
                    <input 
                        type='text' 
                        placeholder='your email' 
                        onChange={changeHandler} 
                        name='contactEmail' 
                        value={formData.contactEmail}
                        className='h-10 border-solid border border-blue-600 p-2 rounded-lg'
                    ></input>
                    
                    <div>
                        <button type='submit'
                        className='h-full border-solid border border-blue-600 p-2 rounded-lg'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div>
            <Link to='/'
            className='text-blue-900'
            >
                Go to homepage
            </Link>
        </div>
    </div>
  )
}

export default CreateContactPage