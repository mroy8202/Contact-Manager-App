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
    <div>
        <div>
            <div>
                <h1>Create a new contact</h1>
            </div>
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <input 
                            type='text' 
                            placeholder='your name' 
                            onChange={changeHandler} 
                            name='contactName' 
                            value={formData.contactName}
                        ></input>
                    </div>
                    <div>
                        <input 
                            type='text' 
                            placeholder='phone number' 
                            onChange={changeHandler} 
                            name='contactPhone' 
                            value={formData.contactPhone}
                        ></input>
                    </div>
                    <div>
                        <input 
                            type='text' 
                            placeholder='your email' 
                            onChange={changeHandler} 
                            name='contactEmail' 
                            value={formData.contactEmail}
                        ></input>
                    </div>
                    <div>
                        <button type='submit'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div>
            <Link to='/'>
                Go to homepage
            </Link>
        </div>
    </div>
  )
}

export default CreateContactPage