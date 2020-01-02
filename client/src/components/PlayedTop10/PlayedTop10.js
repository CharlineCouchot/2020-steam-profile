import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import StyledPlayedTop10 from './styled/PlayedTop10'

const PlayedTop10 = ({ prop1, prop2, ...props }) => {
  useEffect(() => {}, [prop1])

  return (
    <StyledPlayedTop10>
      <div></div>
    </StyledPlayedTop10>
  )
}

PlayedTop10.defaultProps = {
  prop1: {},
  prop2: {}
}

PlayedTop10.propTypes = {
  prop1: PropTypes.shape({}),
  prop2: PropTypes.shape({})
}

export default PlayedTop10
