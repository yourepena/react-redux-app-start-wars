import React from "react";
import PropTypes from 'prop-types'
import People from "../components/People";

const PeopleList = ({ people, getPeople }) => (
  <ul>
    {people.map(p =>
     <People 
      key={p.id} 
      {...p} 
      onClick={() => getPeople()} />
    )}
  </ul>
)


PeopleList.propTypes = {
  people: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    eye_color: PropTypes.string.isRequired
  }).isRequired).isRequired,
  getPeople: PropTypes.func.isRequired
}
 

export default PeopleList