import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
const Bookedassistance = () => {
  const [listdata, setlistdata] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "http://localhost:3000/bookassistance/getassistancebook"
        );
        const data = await res.json();
        console.log(data);
        setlistdata(data.bookassistanceget);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <main className="main">
        <div className="sidebar" id="sidebar">
          <div className="logo">
            <p>Dashboard</p>
          </div>

          <ul className="navigation">
            <Link to="/dashboard" className="link-main ">
              <MdOutlineSpaceDashboard /> Apply Now
            </Link>
            <NavLink to="/booked" className="link-main active">
              <BsFillCartFill /> Booked
            </NavLink>
            <Link to="/login" className="link-main">
              <IoPersonSharp /> Logout
            </Link>
          </ul>
        </div>
        <div className="main-area">
          <div className="products box">
            <h1>Top Assistance Services booked</h1>

            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Contact No.</th>
                  <th>District</th>
                  <th>Pincode</th>
                  <th>Services</th>
                  <th>No.of workers</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Durations</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {listdata?.map((eachElement, i) => {
                  return (
                    <tr key={eachElement._id}>
                      <td>{i + 1}</td>
                      <td>{eachElement.fullname}</td>
                      <td>{eachElement.address}</td>
                      <td>{eachElement.contactnumber}</td>
                      <td>{eachElement.district}</td>
                      <td>{eachElement.pincode}</td>
                      <td>{eachElement.serviceavailable}</td>
                      <td>{eachElement.workers}</td>
                      <td>{eachElement.date}</td>
                      <td>{eachElement.time}</td>
                      <td>{eachElement.duration}</td>
                      <td>₹ {eachElement.amount}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default Bookedassistance;
