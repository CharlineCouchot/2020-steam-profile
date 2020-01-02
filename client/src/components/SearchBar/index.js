import { connect } from 'react-redux'
import { action } from '../../actions'

import SearchBar from './GamesList'

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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
