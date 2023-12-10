import React from 'react'

const Namecard = ({ contact }) => {
  return (
    <div>
      <h1>{contact.contactName}</h1>
    </div>
  )
}

export default Namecard