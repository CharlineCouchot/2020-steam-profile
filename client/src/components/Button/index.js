import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * <Button active>active</Button>
 * <Button>regular</Button>
 */
const StyledButton = styled.button`
  background: ${props =>
    props.active
      ? props.theme.common.grey.dark
      : props.theme.common.lightGrey.light};
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  &:focus {
    outline: none;
  }
  &:hover:not(:focus) {
    cursor: ${props => (props.active ? 'inherit' : 'pointer')};
  }
`

const Button = ({ prop1, prop2, ...props }) => {
  useEffect(() => {}, [prop1])

  return (
    <StyledButton>
      <div></div>
    </StyledButton>
  )
}

Button.defaultProps = {
  prop1: {},
  prop2: {}
}

Button.propTypes = {
  prop1: PropTypes.shape({}),
  prop2: PropTypes.shape({})
}

export default Button
