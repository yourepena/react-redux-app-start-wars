import { connect } from 'react-redux'
import { removePeople, getPeopleRequest } from '../actions'
import PeopleList from '../components/PeopleList'
 

const mapStateToProps = state => ({
  people: state.people
})

const mapDispatchToProps = dispatch => ({
  removePeople: name => dispatch(removePeople(name)),
  getPeople: _ => dispatch(getPeopleRequest()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleList)