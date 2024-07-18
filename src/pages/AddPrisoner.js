import React, { useState } from 'react';
import axios from 'axios';

const AddPrisoner = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [crime, setCrime] = useState("");
  const [sentence, setSentences] = useState("");
    

  const prisoner = {name, age, crime, sentence};

      const Send = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/prisoner/adding ', prisoner)
        
        alert ("data added successfully")


  return (
    <div>
      <h2>Add Prisoner</h2>
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
            value={age}
            onChange={(e) => setAge(e.target.value)}  />
        </label>
        <br />
        <label>
          Department:
          <input type="text" 
          name="department" 
          required
          value={crime}
          onChange={(e) => setCrime(e.target.value)}  />
        </label>
        <label>
          Phone Number:
          <input type="text" 
          name="phoneNumber" 
          required
          value={sentence}
          onChange={(e) => setSentences(e.target.value)}  />
        </label>
        <br />
        <button type="submit" onClick={Send}>Add Prisoner</button>
      </form>
    </div>
  );
};
}

export default AddPrisoner;