import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import "./ReservationBar.css";

function SearchPurchases() {
  const [email, setEmail] = useState("");
  const [details, setdetails] = useState({});
  let emailAddr;
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/api/reservation?email=${email}`, {
      method: "GET",
      params: { email },
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) =>{
        setdetails(localStorage.getItem("ticketDetails"));
      })
      console.log(details)
  };

  return (
    <form className="emailForm" onSubmit={handleSubmit}>
      <label className="emaiLabel">
        Email:
        <input
          className="emailInput"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <button className="submitBTN" type="submit" onClick={handleSubmit}>
        Search
      </button>
      {Object.keys(details).length>=0 && <div>
        <p>{details.id}</p>
        <p>{details.category}</p>
        <p>{details.quantity}</p>
        <p>total: {details.total}</p>
        </div>}
    </form>
  );
}

function ReservationBar() {
  return (
    <div>
      <SearchPurchases />
    </div>
  );
}

export default ReservationBar;
