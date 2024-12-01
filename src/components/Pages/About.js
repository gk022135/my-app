import React from "react";
import './Contact.css'
import propic from './sri ganesh.jpeg'

export const About = () => {

  return (
  <>
  <div className="cards">

  <div className="cbody">
    <div class="user-card">
        <div class="user-image">
            <img src={propic} alt="User Profile"/>
        </div>
        <div class="user-info">
            <h2 class="user-name">Student</h2>
            <p class="user-email">22bcs0XX@smvdu.ac.in</p>
            <p class="user-bio">Cse Student</p>
        </div>
        <div class="user-details">
            <p><strong>Location:</strong> Trikuta Hostel ,</p>
            <p><strong>Year</strong> 3rd</p>
        </div>
    </div>

    </div>



    <div className="cbody">
    <div class="user-card">
        <div class="user-image">
            <img src={propic} alt="User Profile"/>
        </div>
        <div class="user-info">
            <h2 class="user-name">Student</h2>
            <p class="user-email">22bcs0XX@smvdu.ac.in</p>
            <p class="user-bio">Cse Student</p>
        </div>
        <div class="user-details">
            <p><strong>Location:</strong> Trikuta Hostel ,</p>
            <p><strong>Year</strong> 3rd</p>
        </div>
    </div>
    </div>

    <div className="cbody">
    <div class="user-card">
        <div class="user-image">
            <img src={propic} alt="User Profile"/>
        </div>
        <div class="user-info">
            <h2 class="user-name">Student</h2>
            <p class="user-email">22bcs0XX@smvdu.ac.in</p>
            <p class="user-bio">Cse Student</p>
        </div>
        <div class="user-details">
            <p><strong>Location:</strong> Trikuta Hostel ,</p>
            <p><strong>Year</strong> 3rd</p>
        </div>
    </div>

    </div>


  </div>

  </>
  );
};
