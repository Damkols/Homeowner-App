import React from "react";
import Section1 from "../../Components/Section1/Section1";
import Section2 from "../../Components/Section2/Section2";

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <Section1 />

      {/* Section 2 */}
      <Section2 />
    </div>
  );
};

export default Home;
