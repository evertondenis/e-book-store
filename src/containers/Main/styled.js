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
`

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
