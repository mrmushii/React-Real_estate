import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Properties from "./components/Properties.jsx";
import Testimonial from "./components/Testimonial.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Contact />
    <Properties />
    <Testimonial />
    <Footer />
  </StrictMode>
);
