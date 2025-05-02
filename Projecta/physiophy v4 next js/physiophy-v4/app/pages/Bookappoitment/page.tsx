"use client";
import React from 'react'
import './bookappoitment.css'


const bookappoitment = () => {
  return (
    <div>
      <div className="rehab-cta-section" id="bookappoitment">
          <div className="rehab-cta-content rehab-bounce-in">
            <h3>Begin Your Recovery Journey Today</h3>
            <p>Let our experienced team guide you through your rehabilitation process.</p>
            <button  className="rehab-cta-button">
              Make a Consultation
            </button>
            <h2>call</h2>
            <button
              onClick={() => (window.location.href = "tel:+919970127614")}
              className="rehab-cta-button"
            >
              +91 99701 27614
            </button>
          </div>
        </div>
    </div>
  )
}

export default bookappoitment;
