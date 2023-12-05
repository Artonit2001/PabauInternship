import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../ServiceDetails/serviceDetails.css";
import Footer from "../Footer/Footer";

const ServiceDetails = ({ setPageNumber }) => {
  const location = useLocation();
  const serviceName = location.state;

  useEffect(() => {
    setPageNumber(2);
  }, []);

  return (
    <div className="serviceDetails">
      <h3 className="selectedService">Selected Service: {serviceName}</h3>
      <button className="backButton">
        <Link to="/">Go back to Service List</Link>
      </button>
    </div>
  );
};

export default ServiceDetails;
