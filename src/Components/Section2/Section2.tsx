import React from "react";
import styles from "./Section2.module.scss";
import building from "../../assets/building2.jpg";
import { ArrowButton } from "../../drop-in-components/button/Button";

const Section2: React.FunctionComponent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container__img}>
        <img src={building} alt="a building" />
      </div>

      <div className={styles.container__slogan}>
        <h1>
          Whether You are Buying, Selling Or Renting, We can Help You Move
          Forward
        </h1>
      </div>

      <div className={styles.container__selection}>
        <div className={styles.buy}>
          <h3>Buy a Home</h3>
          <p>
            Find your place with and immersive photo experience and the most
            listings, including things you won't find anywhere else
          </p>
          <ArrowButton text="Search Houses" path="buy" />
        </div>

        <div className={styles.rent}>
          <h3>Rent a Home</h3>
          <p>
            We are creating online experience - from shopping on the largest
            rental network, to applying, to paying rent.
          </p>
          <ArrowButton text="See Your Options" path="buy" />
        </div>

        <div className={styles.sell}>
          <h3>Sell a Home</h3>
          <p>
            Whether you get a cash offer through Sujimotu offers or choose to
            sell traditionally, we can help you navigate a succesful sale.
          </p>
          <ArrowButton text="Use Filters" path="search" />
        </div>
      </div>
    </section>
  );
};

export default Section2;
