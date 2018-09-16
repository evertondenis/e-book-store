import styled from 'styled-components'

export const Container = styled.div`
  margin: 80px auto;
  display: block;
  width: 100%;


  @media screen and (min-width: 60em) {
    width: 941px;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({padding}) => padding};

  p {
    padding: 0;
    margin: 0;
  }
`

Content.defaultProps = {
  padding: '0',
}

export const H1 = styled.h1`
  margin-bottom: 40px;
  font-size: 1.8em;
  font-weight: bold;
}
`

export const Text = styled.p`
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

export const Title = styled.p`
  font-size: 1.4em;
  font-weight: bold;
  padding: ${({padding}) => padding};
  margin: ${({margin}) => margin};
`

Title.defaultProps = {
  padding: '0',
  margin: '0',
}

export const Line = styled.div`
  width: 100%;
  margin: 40px auto;
  opacity: 0.5;
  border: solid 1px ${({color}) => color};

  @media screen and (min-width: 60em) {
    width: ${({width}) => width};
  }
`

Line.defaultProps = {
  width: '939px',
  color: '#979797'
}

export const ContainerProduct = styled.div`
  padding-top: 40px;

  ul {
    margin: 0 0 50px;
    padding: 0;

    > li {
      list-style: none;
    }
  }
`

export const Product = styled.div`
  display: grid;
  grid-template-columns: 60px 141px 1fr 1fr;
  align-items: center;
  margin-bottom: 40px;

  .addCart {
    width: 20px;
    height: 20px;
    padding: 0;
    position: relative;
    cursor: pointer;

    &::before {
      content: "";
      display: inline-block;
      height: 16px;
      width: 16px;
      border: 2px solid;
      background: #fff;
      position: absolute;
    }

    &::after {
      content: none;
      display: inline-block;
      height: 6px;
      width: 9px;
      top: 4px;
      left: 4px;
      border-left: 2px solid #000;
      border-bottom: 2px solid #000;
      transform: rotate(-45deg);
      position: absolute;
    }

    &:checked {
      ::after {
        content: ""
      }
    }
  }
`

export const Price = styled.p`
  font-size: 1.8em;
  font-weight: bold;
  justify-self: end;
`

export const Total = styled.div`
  margin: 0 auto 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    padding: 0;
    margin: 0;
  }
`

export const Checkout = styled.div`
  width: 100%;
  margin: 0 auto 80px;
`

const Box = styled.div`
  display: block;
  position: relative;
  width: 100%;
  padding: 40px 60px;
  margin-bottom: 40px;
  background: #f7f7f7;

  &:not(:last-child) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 60em) {
    width: 821px;
  }
`

Box.Head = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: #f7f7f7;
  margin-bottom: 30px;
`

export default Box

export const Step = styled.div`
  display: flex;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border: 2px solid #000;
  border-radius: 50%;
  font-size: 1.4em;
  font-weight: bold;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

export const Label = styled.label`
  width: 100%;
  font-size: 1.2em;
  color: #000;
  margin-right: 42px;

  &:not(:last-child) {
    padding-right: 20px;
  }
`

export const Input = styled.input`
  display: block;
  width: 100%;
  background-color: #ffffff;
  border: solid 1px #c5c5c5;
  font-size: 1.2em;
  margin-top: 5px;
  padding: 16px 20px;

  &::placeholder {
    color: #c5c5c5;
    opacity: 1;
  }

  &:-ms-input-placeholder {
      color: #c5c5c5;
  }

  &::-ms-input-placeholder {
      color: #c5c5c5;
  }
`
