import styled from 'styled-components'

const Title = styled.p`
  font-size: 1.4em;
  font-weight: bold;
  padding: ${({padding}) => padding};
  margin: ${({margin}) => margin};
`

Title.defaultProps = {
  padding: '0',
  margin: '0',
}

export default Title
