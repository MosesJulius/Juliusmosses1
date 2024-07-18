import React, { useState } from 'react';
import axios from 'axios';

const CreateSchedule = () => {

  const [officerName, setOfficerName] = useState("");
  const [date, setDate] = useState("");
  const [shift, setShift] = useState("");
  const [post, setPost] = useState("");

  const schedule = {officerName, date, shift, post, };

  const Save = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/schedule/adding ', schedule)
    alert ("data added successfully")

  }

  return (
    <div className="create-schedule-container">
      <h1>Create Schedule</h1>
      <form>
        <label>
          Officer Name:
          <input type="text"
          name="officerName"
          id='validation'
          required
          value={officerName}
          onChange={(e) => setOfficerName(e.target.value)}/>
        </label>
        <br />
        <label>
          Date:
          <input type="date"
          name="date"
          id='validation'
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}/>
        </label>
        <br />
        <label>
          Shift:
          <select name="shift"
          id='validation'
          required
          value={shift}
          onChange={(e) => setShift(e.target.value)}>
            <option value="">Select shift</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="night">Night</option>
          </select>
        </label>
        <br />
        <label>
          Post:
          <select name="post"
          id='validation'
          required
          value={post}
          onChange={(e) => setPost(e.target.value)}>
            <option value="">Select post</option>
            <option value="gate">Gate</option>
            <option value="tower">Tower</option>
            <option value="cellblock">Cellblock</option>
          </select>
        </label>
        <br />
        <button type="submit" onClick={Save}>Create Schedule</button>
      </form>
    </div>
  );
};

export default CreateSchedule;