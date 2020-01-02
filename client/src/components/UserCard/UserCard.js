import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import StyledUserCard from './styled/UserCard'

const UserCard = ({ prop1, prop2, ...props }) => {
  useEffect(() => {}, [prop1])

  return (
    <StyledUserCard>
      <div></div>
    </StyledUserCard>
  )
}

UserCard.defaultProps = {
  prop1: {},
  prop2: {}
}

UserCard.propTypes = {
  prop1: PropTypes.shape({}),
  prop2: PropTypes.shape({})
}

export default UserCard
