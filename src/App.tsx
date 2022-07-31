import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Buy, Property, Rent, Search } from "./Pages";
import Navbar from "./Components/Navbar/Navbar";

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      {/* <Routes>
        <Route
          path="*"
          element={
            <main>
              <Navbar />
              <h1 style={{ marginTop: "3rem", color: "rgb(26, 55, 58)" }}>
                404 Not Found
              </h1>
            </main>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/search" element={<Search />} />
        <Route path="/property">
          <Route path=":propertyId" element={<Property />} />
        </Route>
        <Route
          path="/about"
          element={
            <main>
              <Navbar />
              <h1 style={{ marginTop: "3rem", color: "rgb(26, 55, 58)" }}>
                About
              </h1>
            </main>
          }
        />
      </Routes> */}
      <Navbar />
    </div>
  );
};

export default App;
