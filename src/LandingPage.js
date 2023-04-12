import React, { useState } from "react";
import axios from "axios";
import "./LandingPage.css"

const LandingPage = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    // call API to validate pin
    try {
      const response = await axios.post(
        "https://example.com/api/validate-pin",
        {
          mobileNumber,
          pin,
          offerParameter: "139397",
          apiKey: "a84456f7119c21b5e61ff84398e5bb83",
          country: "Saudi Arabia",
        }
      );
      setSuccess(response.data.message);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <h1>Get Exclusive Access to a Limited-Time Offer in Saudi Arabia</h1>
      <p>Use offer parameter 139397 to avail of our special discount on all purchases.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mobile-number">Mobile Number:</label>
        <input
          type="text"
          id="mobile-number"
          name="mobileNumber"
          value={mobileNumber}
          onChange={(event) => setMobileNumber(event.target.value)}
          required
        />
        <br />
        <label htmlFor="pin">4-digit PIN:</label>
        <input
          type="password"
          id="pin"
          name="pin"
          value={pin}
          onChange={(event) => setPin(event.target.value)}
          minLength={4}
          maxLength={4}
          required
        />
        <br />
        <button type="submit">Get Offer</button>
      </form>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <p>
        To opt-out of our future promotions, text the code 801471 to our number. If you want to unsubscribe from our service,
        text U 34 to the same number. You can also click the UNSUB link on our website and follow the instructions.
      </p>
      <p>Please note that our sender ID is not applicable for this promotion.</p>
    </div>
  );
};

export default LandingPage;

