import React from "react";
import PropTypes from 'prop-types'
import People from "../components/People";

const PeopleList = ({ people, removePeople }) => (
  <div className="container-list">
    {people.map(p =>
     <People 
      key={p.name} 
      {...p}
      onClick={() => removePeople(p.name)} />
    )}
  </div>
)


PeopleList.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    eye_color: PropTypes.string.isRequired
  }).isRequired).isRequired,
  getPeople: PropTypes.func.isRequired
}
 

export default PeopleList