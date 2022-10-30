import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  const handleName = ({ target }) => {
    setName(target.value);
  };

  const handlePhone = ({ target }) => {
    setPhone(target.value);
  };

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          required
          type="text"
          name="name"
          value={name}
          onChange={handleName}
          placeholder="Contact Name"
        ></input>
      </label>

      <label>
        <input
          required
          type="tel"
          name="tel"
          value={phone}
          onChange={handlePhone}
          placeholder="Contact phone"
        ></input>
      </label>

      <label>
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
          placeholder="Contact Email"
        ></input>
      </label>

      <input type="submit" value="Add contact"></input>
    </form>
  );
};
