import React from 'react';
import PropTypes from 'prop-types';
import {PointActionButton} from './buttons.js';


export class CheckPoint extends React.Component {

    constructor (props) {
      super(props);
      this.state = {
        style: {'text-decoration': 'none'}
      };
      this.handlePointClick = this.handlePointClick.bind(this);
    }

    handlePointClick (e) {
      let lt = 'line-through';
      this.setState({
        style: {
          'text-decoration': this.state.style['text-decoration'] !== lt ? lt : 'none'
        }
      });
    }

    render() {
      return (
        <div>
          <li style={this.state.style} onClick={this.handlePointClick}>
            <PointActionButton
              class="div-button"
              name="Delete point"
              onClick={(e) => this.props.onClick(Number.parseInt(this.props.index))}
            />
            {this.props.point}
          </li>
        </div>
      );
    }
}


CheckPoint.propTypes = {
  onClick: PropTypes.func.isRequired,
  point: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired
};
