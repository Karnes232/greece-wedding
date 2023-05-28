import React from "react"
import ContactInfo from "./ContactInfo"

const ContactForm = () => {
  return (
    <>
      <form
        name="contact"
        method="POST"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        id="contact"
        className="w-64 md:w-full max-w-md flex flex-col justify-center items-center mx-auto my-5"
      >
        <input type="hidden" name="form-name" value="contact" />
        <ContactInfo />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ContactForm
