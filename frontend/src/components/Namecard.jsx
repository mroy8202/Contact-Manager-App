import React from 'react'

const Namecard = ({ contact }) => {
  return (
    <div className='flex justify-between bg-slate-800 hover:bg-slate-500 duration-75 ease-in-out'>
      <div className='h-full my-auto'>
        <p className='text-xl font-bold text-white ml-2'>
          {contact.contactName}
        </p>
      </div>

      <div className='w-1/3 mr-2 text-white'>
        <p className='w-full text-center text-lg'>
          (+91) {contact.contactPhone}
        </p>
        <p className='w-full text-center text-lg'>
          {contact.contactEmail}
        </p>
      </div>
    </div>
  )
}

export default Namecard