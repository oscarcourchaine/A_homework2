import './App.css';
import { useState } from "react";
import { useFormState } from "react-dom";

export default function Enter() {
  function enter(formData) {
    console.log("success");
    const fname = formData.get("fname");
    const lname = formData.get("lname");
    const npi = formData.get("npi");
    const streetaddress = formData.get("streetaddress");
    const city = formData.get("city");
    const state = formData.get("state");
    const zip = formData.get("zip");
    const phone = formData.get("phone");
    const email = formData.get("email");

    const result = {fname, lname, npi, streetaddress, city, state, zip, phone, email};

    console.log(`You entered '${result}'`);
  }

  return (
    <div className="App">
      <header className="App-header">
      <p>Healthcare Providers, please enter your information below:</p><br></br><br></br><br></br>
        <form onSubmit={enter}>
          <label htmlFor="fname"> First Name:  </label>
          <input id="fname" name="FirstName" /><br></br>
          <label htmlFor="lname"> Last Name:  </label>
          <input id="lname" name="LastName" /><br></br><br></br>

          <label htmlFor="npi"> NPI Number:  </label>
          <input id="npi" name="NPI Number" /><br></br><br></br>
          
          <label htmlFor="streetaddress"> Street Address:  </label>
          <input id="streetaddress" name="StreetAddress" /><br></br>
          <label htmlFor="city"> City:  </label>
          <input id="city" name="City" /><br></br>
          <label htmlFor="state"> State:  </label>
          <input id="state" name="State" /><br></br>
          <label htmlFor="zip"> ZIP:  </label>
          <input id="zip" name="ZIP" /><br></br><br></br>

          <label htmlFor="phone"> Phone Number:  </label>
          <input id="phone" name="Phone Number" /><br></br>

          <label htmlFor="email"> Email Address:  </label>
          <input id="email" name="EmailAddress" /><br></br><br></br><br></br>

          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}