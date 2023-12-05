import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import ServiceDetails from "./components/ServiceDetails/serviceDetails";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ServiceList from "./components/ServiceList/serviceList";

const App = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <>
      <Router>
        <div className="mainPage">
          <Header pageNumber={pageNumber} />
          <div className="services">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <ServiceList
                    onServiceClick={handleServiceClick}
                    setPageNumber={setPageNumber}
                  />
                }
              />
              <Route
                path="/service/:id"
                element={<ServiceDetails setPageNumber={setPageNumber} />}
              />
            </Routes>
          </div>
        </div>
      </Router>
      <Footer />
    </>
  );
};

export default App;
