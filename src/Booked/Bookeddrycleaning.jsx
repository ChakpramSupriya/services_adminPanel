import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
const Bookeddrycleaning = () => {
  const [listData, setListData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "http://localhost:3000/bookdryclean/getdrycleanbook"
        );
        const data = await res.json();
        console.log(data);
        setListData(data.bookdrycleanget);
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
            <Link to="/dashboard" className="link-main">
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
            <h1>Top Dry Cleaning Services booked</h1>

            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Contact No.</th>
                  <th>District</th>
                  <th>Pincode</th>
                  <th>Message</th>
                  <th>Items</th>
                  <th>Product type</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {listData?.map((eachElement, i) => {
                  return (
                    <tr key={eachElement._id}>
                      <td>{i + 1}</td>
                      <td>{eachElement.fullname}</td>
                      <td>{eachElement.address}</td>
                      <td>{eachElement.contactnumber}</td>
                      <td>{eachElement.district}</td>
                      <td>{eachElement.pincode}</td>
                      <td>{eachElement.message}</td>
                      <td>{eachElement.items}</td>
                      <td>{eachElement.productstype}</td>
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

export default Bookeddrycleaning;
