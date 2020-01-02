import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import StyledPlayedRecently from './styled/PlayedRecently'

const PlayedRecently = ({ prop1, prop2, ...props }) => {
  useEffect(() => {}, [prop1])

  return (
    <StyledPlayedRecently>
      <div></div>
    </StyledPlayedRecently>
  )
}

PlayedRecently.defaultProps = {
  prop1: {},
  prop2: {}
}

PlayedRecently.propTypes = {
  prop1: PropTypes.shape({}),
  prop2: PropTypes.shape({})
}

export default PlayedRecently
