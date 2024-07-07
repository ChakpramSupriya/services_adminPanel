import React, { useState, useEffect } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
const Dashboarddry = () => {
  const [listData, setListData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/dryclean/getdryclean");
        const data = await res.json();
        console.log(data);
        setListData(data.appliedUsers);
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
            <NavLink to="/dashboard" className="link-main active">
              <MdOutlineSpaceDashboard /> Apply Now
            </NavLink>

            <Link to="/booked" className="link-main">
              <BsFillCartFill /> Booked
            </Link>
            <Link to="/login" className="link-main">
              <IoPersonSharp /> Logout
            </Link>
          </ul>
        </div>
        <div className="main-area">
          <div className="products box">
            <h1>Top Dry Cleaning Services Applied</h1>

            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Phone Number</th>
                  <th>Address</th>
                  <th>Pincode</th>
                  <th>District</th>
                  <th>Aadhaar Number</th>
                  <th>Gender</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {listData?.map((eachElement, i) => {
                  return (
                    <tr key={eachElement._id}>
                      <td>{i + 1}</td>
                      <td>{eachElement.fullname}</td>
                      <td>{eachElement.email}</td>
                      <td>{eachElement.age}</td>
                      <td>{eachElement.phonenumber}</td>
                      <td>{eachElement.address}</td>
                      <td>{eachElement.pincode}</td>
                      <td>{eachElement.district}</td>
                      <td>{eachElement.aadhaarnumber}</td>
                      <td>{eachElement.gender}</td>
                      <td>{eachElement.date}</td>
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

export default Dashboarddry;
