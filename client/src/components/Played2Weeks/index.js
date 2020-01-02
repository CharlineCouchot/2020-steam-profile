import { connect } from 'react-redux'
import { action } from '../../actions'

import Played2Weeks from './Played2Weeks'

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

export default connect(mapStateToProps, mapDispatchToProps)(Played2Weeks)
