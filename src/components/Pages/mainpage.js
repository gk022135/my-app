import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import html2canvas from "html2canvas";


export function MainPg() {

  // const result = {
  //   success: true,
  //   message: "Congratulations on your achievement!",
  //   username: "Gaurav Kumar"
  // };

  // function displayCard({ username, message }) {
  //   // Update card content
  //   document.getElementById("username").textContent = username;
  //   document.getElementById("message").textContent = message;
  //   document.getElementById("timestamp").textContent = new Date().toLocaleString();

  //   // Show the card
  //   document.getElementById("card").style.display = "block";
  // }

  // async function downloadCard() {
  //   const cardElement = document.querySelector(".card");
  //   const canvas = await html2canvas(cardElement);
  //   const image = canvas.toDataURL("image/png");

  //   const link = document.createElement("a");
  //   link.href = image;
  //   link.download = "card.png";
  //   link.click();
  // }

  // if (result.success) {
  //   displayCard(result);
  // }



  return (
    <div>
      <p>dsnfkjnjfd</p>
      <span className='span'>Already have an account ?
        <Link to="/login">Login</Link>
      </span>

      {/* <div id="card" style="display: none;">
        <div class="card">
          <h2 id="username"></h2>
          <p id="message"></p>
          <small id="timestamp"></small>
        </div>
        <button onclick="downloadCard()">Download as Image</button>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"></script> */}


    </div>

  );

};
export default MainPg;