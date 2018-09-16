import React, { Component } from 'react'
import axios from 'axios'
import { map, find, filter, sumBy, isEqual, debounce } from 'lodash'
import { formatPrice } from 'core/helpers/number'
import { listProducts } from './utils'
import payments from 'core/assets/images/payments.jpg'
import { Formik } from 'formik'
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
  Button,
} from './styled'

const DEBOUNCE_TIME = 1500
const BASE_URL = 'https://viacep.com.br/ws/'

class Main extends Component {

  state ={
    total: 0.00,
    basket: [],
  }

  componentDidMount() {
    this.handleOnDebounce = debounce(this.getAddress, DEBOUNCE_TIME)
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

  getAddress = async (zipcode, func) => {
    const route = `${zipcode}/json`
    const response = await axios(BASE_URL + route)
    const { logradouro, bairro, uf, localidade } = response.data

    console.log(response.data)

    if (!response.data.erro){
      func('address', `${logradouro}, ${bairro}`)
      func('city', localidade)
      func('state', uf)
    }
  }

  handleOnDebounce = ({ getAddress }) => getAddress

  handleChange = (value, func) => {
    this.handleOnDebounce(value.target.value, func)
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
        <Formik
          initialValues={{
            name: '', email: '', cpf: '', zipcode: '', state: '', city: '', address: '',
            cardholdername: '', cardname: '', duedate: '', cvv: '',
          }}

          onSubmit={values => console.log(values)}

          render={({
            touched,
            errors,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box>
                <Box.Head>
                  <Step>1</Step>
                  <Title>Personal data</Title>
                </Box.Head>
                <FormGroup>
                  <Label>
                    Name
                    <Input
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="text"
                      name="name"
                      placeholder="Your name here"
                      value={values.name}
                    />
                  </Label>
                </FormGroup>
                <FormGroup>
                  <Label>
                    E-mail
                    <Input
                      onChange={handleChange}
                      type="text"
                      name="email"
                      placeholder="Your e-mail here"
                      value={values.email}
                    />
                  </Label>
                  <Label>
                    CPF
                    <Input
                      onChange={handleChange}
                      type="text"
                      name="cpf"
                      placeholder="Your CPF here"
                      value={values.cpf}
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
                      onChange={event => {
                        handleChange(event)
                        this.handleChange(event, setFieldValue)
                      }}
                      type="text"
                      name="zipcode"
                      placeholder="Your zip code here"
                      value={values.zipcode}
                    />
                  </Label>
                  <Label>
                    State
                    <Input
                      onChange={handleChange}
                      type="text"
                      name="state"
                      placeholder="Your state here"
                      value={values.state}
                    />
                  </Label>
                  <Label>
                    City
                    <Input
                      onChange={handleChange}
                      type="text"
                      name="city"
                      placeholder="Your city here"
                      value={values.city}
                    />
                  </Label>
                </FormGroup>
                <FormGroup>
                  <Label>
                    Address
                    <Input
                      onChange={handleChange}
                      type="text"
                      name="address"
                      placeholder="Your full address here"
                      value={values.address}
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
                      onChange={handleChange}
                      type="text"
                      name="cardholdername"
                      placeholder="Your name here"
                      value={values.cardholdername}
                    />
                  </Label>
                </FormGroup>
                <FormGroup>
                  <Label>
                    Card name
                    <Input
                      onChange={handleChange}
                      type="text"
                      name="cardname"
                      placeholder="1234 5678 9101 1121"
                      value={values.cardname}
                    />
                  </Label>
                </FormGroup>
                <FormGroup>
                  <Label>
                    Due date
                    <Input
                      onChange={handleChange}
                      type="text"
                      name="duedate"
                      placeholder="12/25"
                      value={values.duedate}
                    />
                  </Label>
                  <Label>
                    CVV
                    <Input
                      onChange={handleChange}
                      type="text"
                      name="cvv"
                      placeholder="123"
                      value={values.cvv}
                    />
                  </Label>
                </FormGroup>
                <FormGroup>
                  <Button type="submit">BUY NOW</Button>
                </FormGroup>
              </Box>
            </form>
          )}
        />
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
