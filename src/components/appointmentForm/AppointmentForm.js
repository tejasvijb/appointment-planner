import React from "react";
import {ContactPicker} from "../contactPicker/ContactPicker"

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
        required
        type="text"
        name="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
        ></input>
      </label>
      <br/>

      <label>
      <input
        required
        type="date"
        name="date"
        value={date}
        min={getTodayString()}
        onChange={e => setDate(e.target.value)}
        placeholder="Date"
        ></input>
      </label>
      <br/>

      <label>
      <input
        required
        type="time"
        name="time"
        value={time}
        onChange={e => setTime(e.target.value)}
        placeholder="Time"
        ></input>
      </label>
      <br/>

      <label>
        <ContactPicker 
        name="contact"
        value={contact}
        contacts={contacts} 
        onChange={e => setContact(e.target.value)}/>
      </label> 
      <br/>
      <input type="submit" value="Add Appointment"></input>
    </form>
  );
};
