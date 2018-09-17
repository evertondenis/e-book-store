import React, { Component } from 'react'
import { map, find, filter, sumBy, isEqual } from 'lodash'
import { formatPrice } from 'core/helpers/number'
import { listProducts } from './utils'
import payments from 'core/assets/images/payments.jpg'
import Checkout from 'containers/Checkout'
import Title from 'components/Title'
import Text from 'components/Text'
import {
  Container,
  ContainerProduct,
  H1,
  Product,
  Price,
  Line,
  Total,
  Content,
} from './styled'

class Main extends Component {

  state ={
    total: 0.00,
    basket: [],
  }

  componentWillUpdate(nextProps, nextState) {
    const { basket } = this.state

    if (!isEqual(nextState.basket, basket )) {
      this.updateTotal(nextState.basket)
    }
  }

  updateTotal = (basket) => this.setState({ total: sumBy(basket, 'price')})

  updateCart = (product) => {
    const { basket } = this.state
    const newCart = find(basket, {sku: product.sku})
      ? filter(basket, item => item.sku !== product.sku)
      : [...basket, { sku: product.sku, price: product.price }]

    this.setState({ basket: newCart })

  }

  renderProducts = () => {
    return (
      <ContainerProduct>
        <ul>
          {map(listProducts, item => (
            <li key={item.sku}>
              <Product>
                <input className="addCart" type="checkbox" onChange={() => this.updateCart(item)}/>
                <img alt={item.name} src={item.img}/>
                <div>
                  <Title>{item.name}</Title>
                  <Text>{item.description}</Text>
                </div>
                <Price>R$ {formatPrice(item.price)}</Price>
              </Product>
            </li>
          ))}
        </ul>
      </ContainerProduct>
    )
  }


  renderTotal = () => {
    const { total } = this.state
    const totalPrice = formatPrice(total)

    return (
      <Total>
        <Text fontSize="1.8em" fontWeight="bold" textTransform="uppercase">Total</Text>
        <Price>R$ {totalPrice}</Price>
      </Total>
    )
  }

  render() {
    return (
      <Container>
        <H1>E-book Store</H1>
        <Text>
          Welcome to the best place for you to learn about Latin América E-commerce.
          Start to learn now and discovery ways options to improve your sales.
        </Text>

        {this.renderProducts()}
        <Line />
        {this.renderTotal()}
        <Checkout />
        <Line />

        <Content padding="10px 0 0 0">
          <div>
            <Title>E-book Store</Title>
            <Text>Powered by EBANX  •  Products B2B</Text>
          </div>
          <img src={payments} alt="payments"/>
        </Content>
      </Container>
    )
  }
}

export default Main
