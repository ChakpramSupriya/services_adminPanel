import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
const BookedServices = () => {
  return (
    <>
      <main className="main">
        <div className="sidebar" id="sidebar">
          <div className="logo">
            <p>Dashboard</p>
          </div>

          <ul className="navigation">
            <Link to="/dashboard" className="link-main">
              <MdOutlineSpaceDashboard /> Apply Now
            </Link>

            <NavLink to="/booked" className="link-main">
              <BsFillCartFill /> Booked
            </NavLink>
            <Link to="/login" className="link-main">
              <IoPersonSharp /> Logout
            </Link>
          </ul>
        </div>
        <div className="main-area">
          {/* services for assistance */}
          <div className="products">
            <Link to="/bookeddryclean" className="link">
              Dry Cleaning Services Boooked
            </Link>
          </div>
          <div className="products">
            <Link to="/bookedassistance" className="link">
              Assistance Services Booked
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default BookedServices;
