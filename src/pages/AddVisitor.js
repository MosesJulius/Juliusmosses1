import React, { useState } from 'react';
import axios from 'axios';

const AddVisitor = () => {
  const [Name, setName] = useState("")
  const [PrisonerName, setPrisonerName] = useState("")
  const [VisitDate, setVisitDate] = useState("")
  const [VisitTime, setVisitTime] = useState("")
  const [Relationship, setRelationship] = useState("")
  

  const visitor = {Name, PrisonerName, VisitDate, VisitTime,Relationship}
  const Save = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/visitor/adding ', visitor)
    
    alert ("data added successfully")
 

  return (
    <div className="add-visitor-container">
      <h1>Add Visitor</h1>
      <form>
        <label>
          Name:
          <input type="text"
          name="name"
          required
          value={Name}
          onChange={(e) => setName(e.target.value)}/>
        </label>
        <br />
        <label>
          Prisoner Name:
          <input type="text"
          name="prisonerName"
          required
          value={PrisonerName}
          onChange={(e) => setPrisonerName(e.target.value)} />
        </label>
        <br />
        <label>
          Visit Date:
          <input type="date"
          name="visitDate"
          required
          value={VisitDate}
          onChange={(e) => setVisitDate(e.target.value)}/>
        </label>
        <br />
        <label>
          Visit Time:
          <input type="time"
          name="visitTime"
          required
          value={VisitTime}
          onChange={(e) => setVisitTime(e.target.value)}/>
        </label>
        <br />
        <label>
          Relationship:
          <select 
          name="relationship" 
          required
          value={Relationship}
          onChange={(e) => setRelationship(e.target.value)}>
            <option value="">Select relationship</option>
            <option value="family">Family</option>
            <option value="friend">Friend</option>
            <option value="lawyer">Lawyer</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <button type="submit" onClick={ Save }>Add Visitor</button>
      </form>
    </div>
  );
};
}

export default AddVisitor;