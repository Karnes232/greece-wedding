import React from 'react'

const EventInfo = () => {
  return (
    <>
        <div className="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="eventType"
          id="eventType"
          className="contactFormInput peer"
          placeholder=" "
          required
        />
        <label htmlFor="eventType" className="contactFormLabel">
          Type of Event
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="date"
          name="date"
          id="date"
          className="contactFormInput peer"
          placeholder=" "
          required
        />
        <label htmlFor="date" className="contactFormLabel">
          Date
        </label>
      </div>
      
    </>
  )
}

export default EventInfo