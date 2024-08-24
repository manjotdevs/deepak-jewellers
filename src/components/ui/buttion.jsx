import React from "react";
import PropTypes from "prop-types";

const Button = ({ type = "primary", children, className = "", ...props }) => {
  const buttonClasses = `px-4 py-2 rounded-lg font-semibold transition duration-300 ${
    type === "primary"
      ? "bg-orange-600 text-white hover:bg-orange-700"
      : type === "secondary"
      ? "bg-gray-500 hover:bg-gray-600"
      : type === "destroy"
      ? "text-red-500 rounded-lg hover:bg-red-600 hover:text-white"
      : type === "destroy-active"
      ? " bg-red-600 hover:bg-red-700 text-white border border-rounded-lg border-slate-800 border-2 "
      : type === "link"
      ? "text-blue-800 font-semibold hover:opacity-80 focus:outline-none"
      : type === "custom" // Fix typo here
  } ${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "link",
    "destroy",
    "destroy-active",
    "custom", // Fix typo here as well
  ]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
