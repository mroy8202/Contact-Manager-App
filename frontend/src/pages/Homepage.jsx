import React from 'react'
import { useState, useEffect } from 'react';
import Namecard from '../components/Namecard';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Spinner from '../components/Spinner';
import NoContactsFound from '../components/NoContactsFound';

const Homepage = () => {

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchContacts() {
    setLoading(true);
    try {
      const response = await axios.get('/api/v1/getContact');

      // sort the contacts
      const sortedContacts = response.data.data.sort((a, b) =>
        a.contactName.localeCompare(b.contactName)
      );
      
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

    // filter contacts based on search 
    let result = contacts.filter( (contact) => {
      return contact.contactName.toLowerCase().includes(formData.search.toLowerCase());
    });

    setContacts(result);
  }

  function createContactHandler() {
    console.log('create contact button clicked');
    navigate('/createContact');
  }

  return (
    <div className='w-1/2 mx-auto'>
        <div>
          <h1 className='font-extrabold text-3xl text-center pt-2 pb-2'>Contact Manager App</h1>
        </div>

        <div className='flex justify-between h-12 mt-5 mb-5'>
            <form onSubmit={searchHandler} className='flex h-full w-3/4 justify-between'>
                <input 
                  type='text' 
                  placeholder='search name here...' 
                  onChange={changeHandler} 
                  name='search' 
                  value={formData.search} 
                  className='h-full w-full border-l border-t border-b border-black 
                  p-2 rounded-l-3xl outline-blue-700 '
                />

                <button className='h-full border-solid border border-black rounded-r-3xl p-2'>
                  Search
                </button>
            </form>

            <div className='h-full'>
                <button 
                  onClick={createContactHandler}
                  className='h-full border-solid border border-blue-600 p-2 
                  rounded-lg font-bold bg-green-200 hover:bg-green-950 
                  duration-100 ease-in-out hover:text-white '
                  >
                    Create Contact
                </button>
            </div>
        </div>

        <div className='flex'>
          {loading ? 
            <div className='h-screen w-screen flex justify-center items-center'>
              <Spinner />
            </div> :
            <div className='flex flex-col w-full gap-4 mb-10'>
              {
                contacts.map( (contact, index) => (
                  <div key={index}
                    className='border border-black rounded-md'
                  >
                    <Namecard contact={contact} />
                  </div>
                ) )
              }
            </div>
          } 
        </div>

        <div>
          {
            !loading && contacts.length == 0 && <NoContactsFound />
          }
        </div>
    </div>
  )
}

export default Homepage