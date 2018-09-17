import React, { Component } from 'react'
import { Formik } from 'formik'
import axios from 'axios'
import { debounce } from 'lodash'
import Title from 'components/Title'
import Box, {
  CheckoutStyled,
  Step,
  FormGroup,
  Label,
  Input,
  Button,
} from './styled'

const DEBOUNCE_TIME = 1500
const BASE_URL = 'https://viacep.com.br/ws/'

class Checkout extends Component {

  componentDidMount() {
    this.handleOnDebounce = debounce(this.getAddress, DEBOUNCE_TIME)
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

  render() {
    return (
      <CheckoutStyled>
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
      </CheckoutStyled>
    )
  }
}

export default Checkout
