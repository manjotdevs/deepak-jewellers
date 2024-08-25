import React from "react";
import PropTypes from "prop-types";

const Input = ({
  type = "text",
  style = "primary",
  roundness = "none",
  className = "",
  placeholder = "",
  ...props
}) => {
  const roundednessHandler =
    roundness === "none"
      ? "rounded-none"
      : roundness === "5%"
      ? "rounded"
      : roundness === "20%"
      ? "rounded-md"
      : roundness === "40%"
      ? "rounded-lg"
      : roundness === "60%"
      ? "rounded-xl"
      : roundness === "80%"
      ? "rounded-xl"
      : roundness === "100%"
      ? "rounded-full"
      : roundness === "r5%"
      ? "rounded-r"
      : roundness === "r20%"
      ? "rounded-r-md"
      : roundness === "r40%"
      ? "rounded-r-lg"
      : roundness === "r60%"
      ? "rounded-r-xl"
      : roundness === "r80%"
      ? roundness === "l5%"
      ? "rounded-l"
      : roundness === "l20%"
      ? "rounded-l-md"
      : roundness === "l40%"
      ? "rounded-l-lg"
      : roundness === "l60%"
      ? "rounded-l-xl"
      : roundness === "l80%"
      :null

  const styleClasses = `h-12 outline-none border-none ${
    style === "primary"
      ? `bg-orange-50 text-gray-800 ${roundednessHandler}`
      : style === "secondary"
      ? `bg-gray-800 text-slate-100 ${roundednessHandler} `
      : style === "dark"
      ? `bg-gray-950 text-slate-200 ${roundednessHandler}`
      : style === "light"
      ? `bg-slate-100 text-gray-800 ${roundednessHandler}`:
      ""
  } ${className}`;

  return (
      <input
        type={type}
        placeholder={placeholder}
        className={styleClasses}
        {...props}
      />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  style: PropTypes.string,
  roundness: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
