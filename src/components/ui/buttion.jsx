import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type = 'primary', children,className, ...props }) => {
  const buttonClasses = `px-4 py-2 rounded-lg text-white font-semibold transition duration-300 ${
    type === 'primary' ? 'bg-blue-500 hover:bg-blue-600' : type === 'secondary'?'bg-gray-500 hover:bg-gray-600':""
  }${className}`;

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node.isRequired,
};

export default Button;
