import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ReservationBar.css";

function SearchPurchases() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [details, setdetails] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email) {
      setError(true);
      return;
    }
    // fetch(`http://localhost:3000/api/reservation?email=${email}`, {
    //   method: "GET",
    //   params: { email },
    //   headers: { "Content-Type": "application/json" },
    // }).then((res) => res.json());
    const ticketDetails = JSON.parse(localStorage.getItem("ticketDetails"));
    const card = {
      number: "4242424242424242",
      expirationMonth: 12,
      expirationYear: 29,
      cvc: "300",
    };
    ticketDetails.email = email;
    const reservation = { email, ...ticketDetails, card: card };
    console.log(reservation);

    fetch("http://localhost:3000/api/reservation", {
      method: "POST",
      body: JSON.stringify(reservation),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then(navigate("/"));
  };

  return (
    <div>
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
          Reserve
        </button>
        {/* {Object.keys(details).length >= 0 && (
          <div>
            <p>{details.id}</p>
            <p>{details.category}</p>
            <p>{details.quantity}</p>
            <p>total: {details.total}</p>
          </div>
        )} */}
      </form>
      {error && <div style={{ color: "red" }}>Email expected</div>}
    </div>
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
