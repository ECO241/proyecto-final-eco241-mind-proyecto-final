import React from 'react'
import './RegisterSelect.css'

export function RegisterSelect (props) {
  const { title, options1, options2, options3, options4 } = props
  return (
    <label>
      {title}
      <select>
        <option>{options1}</option>
        <option>{options2}</option>
        <option>{options3}</option>
        <option>{options4}</option>

      </select>
    </label>
  )
}
