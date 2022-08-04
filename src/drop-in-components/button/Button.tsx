import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import styles from "./Button.module.scss";

interface ArrowButtonProps {
  text?: string;
  path?: string;
}

const ArrowButton: React.FunctionComponent<ArrowButtonProps> = ({
  text,
  path,
}) => {
  return (
    <div className={styles.arrowbtn}>
      <Link to={`${path}`}>{text}</Link>
      <BsArrowRight />
    </div>
  );
};

ArrowButton.defaultProps = {
  text: "Test btn",
  path: "/",
};

// interface ActionButtonProps {
//   children?: string;
//   // clickFunc:
// }

// const ActionButton: React.FunctionComponent<ActionButtonProps> = ({
//   children,
// }) => {
//   return (
//     <div className={styles.actionBtn}>
//       <button
//         onClick={() => {
//           clickFunc();
//         }}
//       >
//         <span>{children}</span>
//       </button>
//     </div>
//   );
// };

// ActionButton.defaultProps = {
//   children: "Test button",
//   clickFunc: console.log("clicked"),
// };

export { ArrowButton };
