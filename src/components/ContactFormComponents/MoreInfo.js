import React from 'react'

const MoreInfo = () => {
  return (
    <>
        <div className="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="hearAbout"
          id="hearAbout"
          className="contactFormInput peer"
          placeholder=" "
          required
        />
        <label htmlFor="hearAbout" className="contactFormLabel">
          How did you hear about Us
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
          <label
            htmlFor="additional"
            className="block mb-2 text-sm font-medium text-gray-500"
          >
            Additional Information
          </label>
          <textarea
            id="additional"
            name="Additional Information"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Special Requests..."
          ></textarea>
        </div>
    </>
  )
}

export default MoreInfo