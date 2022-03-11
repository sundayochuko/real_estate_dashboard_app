import React, { useState } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Providers from "./pages/Providers";
import Billing from "./pages/Billing";
import Settings from "./pages/Settings";
import Search from "./pages/Search";

function App() {
  const [showModel, setShowModel] = useState(false);
  const [id, setId] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [errors, setErrors] = useState({});

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  id={id}
                  setId={setId}
                  errors={errors}
                  setErrors={setErrors}
                  showModel={showModel}
                  setShowModel={setShowModel}
                  filteredProperties={filteredProperties}
                  setFilteredProperties={setFilteredProperties}
                />
              }
            />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/providers" element={<Providers />} />
            <Route exact path="/billing" element={<Billing />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route
              exact
              path="/search"
              element={
                <Search
                  id={id}
                  setId={setId}
                  errors={errors}
                  setErrors={setErrors}
                  showModel={showModel}
                  setShowModel={setShowModel}
                  filteredProperties={filteredProperties}
                  setFilteredProperties={setFilteredProperties}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
