import React from "react";

export const ContactPicker = ({contacts,onChange}) => {
  return (
    <label>
      <select onChange={onChange} name="ontacts">
        <option key="none" value="none" selected>Contacts</option>
        {contacts.map(contact => (<option key={contact.name} value={contact.name}>{contact.name}</option>))}
      </select>
    </label>
  );
};
