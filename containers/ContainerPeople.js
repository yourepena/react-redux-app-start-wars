import { connect } from 'react-redux'
import { getPeople } from '../actions'
import PeopleList from '../components/PeopleList'
 

const mapStateToProps = state => ({
  people: state.people
})

const mapDispatchToProps = dispatch => ({
  getPeople: _ => dispatch(getPeople())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PeopleList)