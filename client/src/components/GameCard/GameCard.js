import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import StyledGameCard from './styled/GameCard'

const GameCard = ({ prop1, prop2, ...props }) => {
  useEffect(() => {}, [prop1])

  return (
    <StyledGameCard>
      <div></div>
    </StyledGameCard>
  )
}

GameCard.defaultProps = {
  prop1: {},
  prop2: {}
}

GameCard.propTypes = {
  prop1: PropTypes.shape({}),
  prop2: PropTypes.shape({})
}

export default GameCard
