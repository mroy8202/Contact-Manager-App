import React from 'react'
import { useState, useEffect } from 'react';
import Namecard from '../components/Namecard';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Spinner from '../components/Spinner';

const Homepage = () => {

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchContacts() {
    setLoading(true);
    try {
      const response = await axios.get('/api/v1/getContact');
      setContacts(response.data.data);
    }
    catch(err) {
      console.error(err);
    }
    setLoading(false);
  }

  useEffect( () => {
    fetchContacts();
  }, []);

  useEffect( () => {
    console.log(contacts);
  }, [contacts] )

    // console.log(contacts);
  const [formData, setFormData] = useState({search: ""});
  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData( prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    } );
  }

  function searchHandler(event) {
    event.preventDefault();
    console.log("Submit button clicked");
    console.log(formData);
  }

  function createContactHandler() {
    console.log('create contact button clicked');
    navigate('/createContact');
  }

  return (
    <div>
        <div>
            <div>
                <form onSubmit={searchHandler}>
                    <input type='text' placeholder='search here...' onChange={changeHandler} name='search' value={formData.search} />
                    <button>Search</button>
                </form>
            </div>
            <div>
                <button onClick={createContactHandler}>Create Contact</button>
            </div>
        </div>

        <div>
          {loading ? 
            <div>
              <Spinner />
            </div> :
            <div>
              {
                contacts.map( (contact, index) => (
                  <div key={index}>
                    <Namecard contact={contact} />
                  </div>
                ) )
              }
            </div>
          }
            
        </div>
    </div>
  )
}

export default Homepage