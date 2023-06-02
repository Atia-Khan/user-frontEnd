import React, { useState } from 'react'

function UserForm() {

const [name, setName] = useState('');
const [password, setPassword] = useState('');
const [date, setDate] = useState('');


function hadleSubmit(){

}




  return (
    <>
        <h2>User Form</h2>
<form onSubmit={handleSubmit}>
    <label htmlFor="name">Enter Your Name: </label>
    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />

    <label htmlFor="password">Enter Your Password: </label>
    <input type="text" name="password" value={password} onChange={e => setDate(e.target.value)}/>

    <label htmlFor="date">Select the date </label>
    <input type="date" name="date" value={date} onChange={e => setDate(e.target.value)} />
</form>
        </>
  )
}

export default UserForm