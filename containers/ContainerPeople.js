import { connect } from 'react-redux'
import { removePeople } from '../actions'
import PeopleList from '../components/PeopleList'
 

const mapStateToProps = state => ({
  people: state.people
})

const mapDispatchToProps = dispatch => ({
  getPeople: id => dispatch(removePeople(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleList)