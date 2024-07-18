import axios from 'axios';
import React, { useState } from 'react';

const OtherWorkers = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
    

  const worker = {name, role, department, phoneNumber, address};

      const save = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/worker/adding ', worker)
        alert ("data added successfully")
      }
  

  return (
    <div>
      <h2>Add Worker</h2>
      <form >
        <label>
          Name:
          <input type="text"
          id='validation'
          required
          value={name}
          onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Role:
          <input type="text" name="role"
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}  />
        </label>
        <br />
        <label>
          Department:
          <input type="text" 
          name="department" 
          required
          value={department}
          onChange={(e) => setDepartment(e.target.value)}  />
        </label>
        <label>
          Phone Number:
          <input type="text" 
          name="phoneNumber" 
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}  />
        </label>
        <br />
        <label>
          Address:
          <input type="text" 
          name="address" 
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}  />
        </label>
        <br />
        <button type="submit" onClick={save}>Add Worker</button>
      </form>
    </div>
  );

}
export default OtherWorkers;