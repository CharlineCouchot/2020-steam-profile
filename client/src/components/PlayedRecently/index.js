import { connect } from 'react-redux'
import { action } from '../../actions'

import PlayedRecently from './PlayedRecently'

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

export default connect(mapStateToProps, mapDispatchToProps)(PlayedRecently)
