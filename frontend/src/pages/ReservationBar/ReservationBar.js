import React, { useEffect, useState } from "react";
import "./ReservationBar.css";

function SearchPurchases() {
  const [email, setEmail] = useState("");
  let emailAddr;
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/api/reservation?email=${email}`, {
      method: "GET",
      params: { email },
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
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
      {emailAddr && <div>{emailAddr}</div>}
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
