import { connect } from 'react-redux'
import { action } from '../../actions'

import UserCard from './UserCard'

const mapStateToProps = state => {
  return {
    key: state.blop.key
  }
}

const mapDispatchToProps = dispatch => ({
  dispatching: thing => {
    dispatch(action(thing))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserCard)
