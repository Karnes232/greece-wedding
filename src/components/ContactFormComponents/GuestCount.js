import React from 'react'

const GuestCount = () => {
  return (
    <div className="relative z-0 mb-6 w-full group">
      <label
        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        htmlFor="tourSelect"
      >
        Estimated Guest Count
      </label>
      <select
        name="tourSelect"
        id="tourSelect"
        className="contactFormInput peer"
      >
        <option value='0-10'>
            0-10 Guests
        </option>
        <option value='10-25'>
            10-25 Guests
        </option>
        <option value='25-50'>
            25-50 Guests
        </option>
        <option value='50-75'>
            50-75 Guests
        </option>
      </select>
    </div>
  )
}

export default GuestCount