import React from "react";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css";
import Header from "./components/common/Header";
import { Route, BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import {
  Home,
  Booking,
  AboutUs,
  Contact,
  PageNotFound,
  Room,
  Services,
  Team,
  Testimonial,
} from "./pages/index";
import Footer from "./components/common/Footer";
import Login from "./admin/Login"
import Dashboard from "./admin/Dashboard"
import ProtectedPage from "./admin/ProtectedPage"

export default function App() {

  const visible = !window.location.pathname.includes('admin');

  return (
    <>
      <div>
        <Router>
          {visible && <Header />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/rooms" element={<Room />}/>
            <Route path="/services" element={<Services />} />
            <Route path="/admin" element={<Login/>}/>
            <Route path="/admin/dashboard" element={<ProtectedPage page={<Dashboard/>}/>}/>
          </Routes>
          {visible && <Footer />}
        </Router>
      </div>
    </>
  );
}
