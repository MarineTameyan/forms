import React from "react";
import "./style.css"
class Forms extends React.Component{
    render(){
        return <div className="container">
            <form action="">
            <div className="name">
                <div><label htmlFor="name">Full Name</label></div>
                <div><input type="text" id="name" placeholder="Full Name"/></div>
            </div>
            <div className="num">
                <div><label htmlFor="number">Phone Number</label></div>
                <div><input type="number" id="number" placeholder="Enter your phone number"/></div>
            </div>
            <div className="mail">
                <div><label htmlFor="mail">Email Address</label></div>
                <div><input type="text" id="mail" placeholder="Enter your email"/></div>
            </div>
            <div className="mail">
                <div><label htmlFor="date">Date</label></div>
                <div><input type="date" id="date"/></div>
                <div><label htmlFor="time">Time</label></div>
                <div><input type="time" id="time"/></div>
            </div>
            <div className="address">
                <label htmlFor="">Address Details</label>
              <div className="details">
                <label htmlFor="area"></label>
                <input type="text" id="area" placeholder="Enter area"/>
                <label htmlFor="city"></label>
                <input type="text" id="city" placeholder="Enter city"/>
                <label htmlFor="state"></label>
                <input type="text" id="state" placeholder="Enter state"/>
                <label htmlFor="post"></label>
                <input type="number" id="post" placeholder="Post Code"/>
              </div>
              <div className="button">
                <button>Book Appointment</button>
              </div>
            </div>
            </form>
        </div>
    }
}

export default Forms