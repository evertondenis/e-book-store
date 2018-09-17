import styled from 'styled-components'

const Text = styled.p`
  font-size: ${({fontSize}) => fontSize};
  font-weight: ${({fontWeight}) => fontWeight};
  text-transform: ${({textTransform}) => textTransform};
  padding: ${({padding}) => padding};
  margin: ${({margin}) => margin};
`

Text.defaultProps = {
  fontSize: '1.4em',
  fontWeight: 'normal',
  textTransform: 'initial',
  padding: '0',
  margin: '0',
}

export default Text
