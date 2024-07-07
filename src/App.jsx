import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import BookedServices from "./Booked/BookedServices";
import Dashboard from "./Dashboard/Dashboard";
import Dashboarddry from "./Dashboard/Dashboarddry";
import Dashboardassistance from "./Dashboard/Dashboardassistance";
import Bookeddrycleaning from "./Booked/Bookeddrycleaning";
import Bookedassistance from "./Booked/Bookedassistance";

import Signup from "./Signup";
import LoginNew from "./LoginNew";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<LoginNew />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<LoginNew />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/dryclean" element={<Dashboarddry />} />
            <Route path="/assistance" element={<Dashboardassistance />} />
          </Route>
          <Route>
            <Route path="/booked" element={<BookedServices />} />
            <Route path="/bookeddryclean" element={<Bookeddrycleaning />} />
            <Route path="/bookedassistance" element={<Bookedassistance />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
