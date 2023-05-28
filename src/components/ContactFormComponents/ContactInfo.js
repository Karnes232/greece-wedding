import React, { useState } from "react"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"
const ContactInfo = () => {
  const [phoneValue, setPhoneValue] = useState()
  return (
    <>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="name"
          name="name"
          id="name"
          className="contactFormInput peer"
          placeholder=" "
          required
        />
        <label htmlFor="name" className="contactFormLabel">
          Full Name
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          type="email"
          name="email"
          id="email"
          className="contactFormInput peer"
          placeholder=" "
          required
        />
        <label htmlFor="email" className="contactFormLabel">
          Email address
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <PhoneInput
          name="telephone"
          defaultCountry="US"
          international
          countryCallingCodeEditable={false}
          placeholder="Enter phone number"
          value={phoneValue}
          onChange={setPhoneValue}
          className="contactFormInput peer"
        />
      </div>
    </>
  )
}

export default ContactInfo
