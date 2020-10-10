import React from 'react'
import PropTypes from 'prop-types'
import '../Buttons.css'

const divStyle = (color) => ({
  color: color,
  fontWeight: 'bold',
});

const People = ({ onClick, name, eye_color }) => (
  <div className="container-flex-row list-group-item">
    <div style={divStyle(eye_color)}>
      {name}
    </div>
    <div>
      <button className="btn btn-xs btn-danger" onClick={onClick} >X</button>
    </div>
  </div>
)

People.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.bool.isRequired,
  eye_color: PropTypes.string.isRequired
}

export default People