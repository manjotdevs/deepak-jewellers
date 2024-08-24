import React from "react";
import PropTypes from "prop-types";

const Dialog = ({ isOpen = false, children = null }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center ">
      <div className=" text-white rounded-lg shadow-lg relative max-w-3xl mx-auto">
        <div className="mt-2 mb-4">{children}</div>
      </div>
    </div>
  );
};

Dialog.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
};

export default Dialog;
