import styled from 'styled-components'

export const CheckoutStyled = styled.div`
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

export const Button = styled.button`
  padding: 17px;
  width: 100%;
  border: 0;
  background-color: #000;
  font-size: 1.2em;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`
