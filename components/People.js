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
  eyeColor: PropTypes.string.isRequired
}

export default People