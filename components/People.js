import React from 'react'
import PropTypes from 'prop-types'

const divStyle = (color) => ({
  color: color,
});

const People = ({ onClick, name, eye_color }) => (
  <div className="container-row">
    <div className="col-6" style={divStyle(eye_color)}>
      {name}
    </div>
    <div className="col-6">
      <button onClick={onClick} >X</button>
    </div>
  </div>
)

People.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.bool.isRequired,
  eye_color: PropTypes.string.isRequired
}

export default People