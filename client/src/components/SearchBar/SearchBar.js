import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import StyledSearchBar from './styled/SearchBar'

const SearchBar = ({ prop1, prop2, ...props }) => {
  useEffect(() => {}, [prop1])

  return (
    <StyledSearchBar>
      <div></div>
    </StyledSearchBar>
  )
}

SearchBar.defaultProps = {
  prop1: {},
  prop2: {}
}

SearchBar.propTypes = {
  prop1: PropTypes.shape({}),
  prop2: PropTypes.shape({})
}

export default SearchBar
