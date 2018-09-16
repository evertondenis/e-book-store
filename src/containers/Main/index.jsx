import React, { Component } from 'react'
import { map, find, filter, sumBy, isEqual } from 'lodash'
import { formatPrice } from 'core/helpers/number'
import { listProducts } from './utils'
import payments from 'core/assets/images/payments.jpg'
import Box, {
  Container,
  ContainerProduct,
  H1,
  Text,
  Title,
  Product,
  Price,
  Line,
  Total,
  Checkout,
  Step,
  Content,
  FormGroup,
  Label,
  Input,
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

  renderCheckout = () => {
    return (
      <Checkout>
        <Box>
          <Box.Head>
            <Step>1</Step>
            <Title>Personal data</Title>
          </Box.Head>
          <FormGroup>
            <Label>
              Name
              <Input
                onChange={() => null}
                type="text"
                name="cep"
                placeholder="Your name here"
              />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              E-mail
              <Input
                onChange={() => null}
                type="text"
                name="email"
                placeholder="Your e-mail here"
              />
            </Label>
            <Label>
              CPF
              <Input
                onChange={() => null}
                type="text"
                name="cpf"
                placeholder="Your CPF here"
              />
            </Label>
          </FormGroup>
        </Box>
        <Box>
          <Box.Head>
            <Step>2</Step>
            <Title>Billing Address</Title>
          </Box.Head>
          <FormGroup>
            <Label>
              Zip code
              <Input
                onChange={() => null}
                type="text"
                name="zipcode"
                placeholder="Your zip code here"
              />
            </Label>
            <Label>
              State
              <Input
                onChange={() => null}
                type="text"
                name="state"
                placeholder="Your state here"
              />
            </Label>
            <Label>
              City
              <Input
                onChange={() => null}
                type="text"
                name="city"
                placeholder="Your city here"
              />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              Address
              <Input
                onChange={() => null}
                type="text"
                name="address"
                placeholder="Your full address here"
              />
            </Label>
          </FormGroup>
        </Box>
        <Box>
          <Box.Head>
            <Step>3</Step>
            <Title>Payment</Title>
          </Box.Head>
          <FormGroup>
            <Label>
              Cardholder name
              <Input
                onChange={() => null}
                type="text"
                name="cardholdername"
                placeholder="Your name here"
              />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              Card name
              <Input
                onChange={() => null}
                type="text"
                name="cardname"
                placeholder="1234 5678 9101 1121"
              />
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              Due date
              <Input
                onChange={() => null}
                type="text"
                name="duedate"
                placeholder="12/25"
              />
            </Label>
            <Label>
              CVV
              <Input
                onChange={() => null}
                type="text"
                name="cvv"
                placeholder="123"
              />
            </Label>
          </FormGroup>
        </Box>
      </Checkout>
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
        {this.renderCheckout()}
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
