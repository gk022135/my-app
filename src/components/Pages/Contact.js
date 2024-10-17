import React from "react";
import './Contact.css'

export const Contact = () => {
  return (
  <>
    <div className="cbody">
    <div class="user-card">
        <div class="user-image">
            <img src="./sri ganesh.jpeg" alt="User Profile"/>
        </div>
        <div class="user-info">
            <h2 class="user-name">John Doe</h2>
            <p class="user-email">johndoe@example.com</p>
            <p class="user-bio">Software Engineer with 5 years of experience in full-stack development.</p>
        </div>
        <div class="user-details">
            <p><strong>Location:</strong> San Francisco, USA</p>
            <p><strong>Member since:</strong> 2021</p>
        </div>
    </div>

    </div>
  </>
  );
};
