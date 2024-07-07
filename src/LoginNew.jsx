import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginNew() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/dashboard");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center items-center bg-white h-[660px]">
      <div className="bg-gray-300 p-8 rounded w-[420px] h-[400px]">
        <h2 className="text-center text-[20px]">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 pt-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="rounded-sm border bg-gray-200 indent-2 w-[350px] h-[40px]"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="rounded-sm border bg-gray-200 indent-2 w-[350px] h-[40px]"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              className="w-[120px] h-[40px] rounded-md  bg-green-400 hover:bg-green-300"
            >
              Login
            </button>
          </div>
        </form>
        <div className="flex justify-start gap-3 mt-2">
          <p>Don't have an Account</p>
          <Link to="/register" className="text-blue-600 w-[100px] rounded-sm  ">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}
export default LoginNew;
