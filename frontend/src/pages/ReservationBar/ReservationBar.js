import React, { useState } from 'react';
import "./ReservationBar.css"

function SearchPurchases({ onSearch }) {
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(email);
  };

  return (
    <form className='emailForm' onSubmit={handleSubmit}>
      <label className='emaiLabel'>
        Email:
        <input
        className='emailInput'
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        /> 
      </label>
      <button className='submitBTN' type="submit">Search</button>
    </form>
  );
}

function ReservationBar() {
  const handleSearch = email => {
    
    console.log(`Searching for purchases made with email: ${email}`);
  };

  return (
    <div>
      <SearchPurchases onSearch={handleSearch} />
    </div>
  );
}

export default ReservationBar;

