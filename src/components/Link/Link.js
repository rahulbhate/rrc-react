import React from 'react';
import PropTypes from 'prop-types';

/** Label with required field display, htmlFor, and block styling */
function Link({href, label, required}) {
  return (
     <a style={{display:'block', textDecoration:'none'}} href={href} target='_blank' rel="noopener noreferrer">
        {label} { required && <span style={{color: 'red'}}> *</span> }
    </a>
  )
}

Link.propTypes = {
  /** HREF for associated Link */
  href: PropTypes.string.isRequired,

  /** Label text */
  label: PropTypes.string.isRequired,

  /** Display asterisk after link if true */
  required: PropTypes.bool
};

Link.defaultProps = {
    
}

export default Link;
