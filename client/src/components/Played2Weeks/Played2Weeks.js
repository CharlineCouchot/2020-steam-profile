import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import StyledPlayed2Weeks from './styled/Played2Weeks'

const Played2Weeks = ({ prop1, prop2, ...props }) => {
  useEffect(() => {}, [prop1])

  return (
    <StyledPlayed2Weeks>
      <div></div>
    </StyledPlayed2Weeks>
  )
}

Played2Weeks.defaultProps = {
  prop1: {},
  prop2: {}
}

Played2Weeks.propTypes = {
  prop1: PropTypes.shape({}),
  prop2: PropTypes.shape({})
}

export default Played2Weeks
