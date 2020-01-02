import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import StyledUser from './styled/User'

const User = ({ prop1, prop2, ...props }) => {
  useEffect(() => {}, [prop1])

  return (
    <StyledUser>
      <div></div>
    </StyledUser>
  )
}

User.defaultProps = {
  prop1: {},
  prop2: {}
}

User.propTypes = {
  prop1: PropTypes.shape({}),
  prop2: PropTypes.shape({})
}

export default User
