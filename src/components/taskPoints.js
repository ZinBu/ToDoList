import React from 'react';
import PropTypes from 'prop-types';
import {PointActionButton} from './buttons.js';


export const CheckPoint = (props) => {
    return (
      <div>
        <li>
          {props.point}
          <PointActionButton name="Delete point" onClick={(e) => props.onClick(Number.parseInt(props.index))} />
        </li>
      </div>
    );
}


CheckPoint.propTypes = {
  onClick: PropTypes.func.isRequired,
  point: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired
};
