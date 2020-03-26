
import React from 'react';
import PropTypes from 'prop-types';


export const PointActionButton = (props) => <button className="check-point" onClick={props.onClick}>{props.name}</button>


PointActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
