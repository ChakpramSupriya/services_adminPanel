import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <main className="main">
        <div className="sidebar" id="sidebar">
          <div className="logo">
            <p>Dashboard</p>
          </div>

          <ul className="navigation ">
            <NavLink to="/dashboard" className="link-main active">
              <MdOutlineSpaceDashboard /> Apply Now
            </NavLink>

            <NavLink to="/booked" className="link-main">
              <BsFillCartFill /> Booked
            </NavLink>
            <NavLink to="/login" className="link-main">
              <IoPersonSharp /> Logout
            </NavLink>
          </ul>
        </div>
        <div className="main-area">
          {/* services for assistance */}
          <div className="products">
            <Link to="/dryclean" className="link">
              Dry Cleaning Services Apply
            </Link>
          </div>
          <div className="products">
            <Link to="/assistance" className="link">
              Assistance Services Apply
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
