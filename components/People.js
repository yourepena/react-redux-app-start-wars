import React from 'react'
import PropTypes from 'prop-types'

const divStyle = (color) => ({
  color: color,
});

const People = ({ onClick, name, eye_color }) => (
  <li onClick={onClick} style={divStyle(eye_color)}>
    {name}
    <button>X</button>
  </li>
)

People.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.bool.isRequired,
  eye_color: PropTypes.string.isRequired
}

export default People