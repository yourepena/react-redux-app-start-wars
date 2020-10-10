import React from "react";
import PropTypes from 'prop-types'
import People from "../components/People";
import Select from 'react-select';

const divStyle = _ => ({
  marginTop: '10px',
});

const PeopleList = ({ people, removePeople, getPeople }) => (
  <div className="container-list">
    <h1>Lista personagens</h1>
    <Select options={people.map(s => ({label: s.name, value: s.name}))} isMulti />
    <div style={divStyle()}>
        {people.map(p =>
        <People 
          key={p.name} 
          {...p}
          onClick={() => removePeople(p.name)} />
        )}
     </div>
    {(!people || people.length === 0) && <button onClick={getPeople} className="btn btn-xs btn-success">Carregar os personagens</button>}
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