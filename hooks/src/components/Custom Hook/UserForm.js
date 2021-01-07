import React, { useState } from 'react'
import useInput from './useInput'

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')

  const submitHandler = e => {
    e.preventDefault()
    resetFirstName()
    resetLastName()
    alert(`Hello ${firstName} ${lastName}`)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First name</label>
          <input value={firstName} onChange={bindFirstName.onChange} type="text" />
        </div>
        <div>
          <label>Last name</label>
          <input value={lastName} onChange={bindLastName.onChange} type="text" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UserForm
