import React from 'react'

const ContactsPage = () => {
  return (
    <div>
      <form>
        <label>
          <input type="text" placeholder="first name"></input>
        </label>
        <label>
          <input type="text" placeholder="last name"></input>
        </label>
        <label>
          <input type="text" placeholder="first name"></input>
        </label>
      </form>
      <button type="submit">Send</button>
    </div>
  );
}

export default ContactsPage;