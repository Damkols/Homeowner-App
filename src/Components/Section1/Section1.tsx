import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Section1.module.scss";
import { Link } from "react-router-dom";
import Bd1 from "../../assets/building1.jpg";

const Section1: React.FunctionComponent = () => {
  const [price, setPrice] = useState<any>("<100k");
  const [location, setLocation] = useState<any>("");

  return (
    <div className={styles.container}>
      {/* Navbar */}
      <div className={styles.container__navbar}>
        <Navbar />
      </div>

      <div className={styles.container__content}>
        <div className={styles.slogan}>
          <h1>Easy Way To Find Your Dream House</h1>
          <p>
            Search and find your dream house at affordable prices , but with the
            best quality. Only available at Sujimotu
          </p>

          {/* Search_Box */}
          <div className={styles.searchContainer}>
            <div className={styles.locationContainer}>
              <span>Location</span>
              <input
                type="text"
                placeholder="Enter a location"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              />
            </div>

            {/* Price Range */}
            <div className={styles.priceContainer}>
              <span>Price Range</span>
              <select
                name="Price"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              >
                <option value="<100k">{`<100k`}</option>
                <option value="100k-200k">100k-200k</option>
                <option value="200k-500k">200k-500k</option>
                <option value=">500k">{`>500k`}</option>
              </select>
            </div>

            {/* SEARCH BUTTON */}
            <button className={styles.btnSearch}>
              <Link to="search">Search</Link>
            </button>
          </div>
        </div>

        {/* BUILDING IMAGE */}
        <div className={styles.sloganImage}>
          <img src={Bd1} alt="building" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
