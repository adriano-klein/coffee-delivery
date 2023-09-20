import { useContext, useEffect, useState } from 'react'
import {
  CartContainer,
  OrderContainer,
  ResumeContainer,
  FormContainer,
  CEPInput,
  StreetInput,
  NumberInput,
  ComplementInput,
  Address,
  NeighborhoodInput,
  CityInput,
  UFInput,
  CityAndNeighborhood,
  TotalResumeContainer,
  ConfirmButton,
  PaymentContainer,
  LeftColumnContainer,
  PaymentMethodButton,
  PaymentMethodContainer,
  TitleContainer,
} from './styles'
import { MapPin, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { CartContext } from '../../contexts/CartContext'
import { ResumeItems } from '../ResumeItens'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FormatPrice } from '../../helpers/FormatPrice'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

export function Cart() {
  const [paymentMethod, setPaymentMethod] = useState('')
  const { cart, calculateTotalValueInCart, handleCreateNewOrder } =
    useContext(CartContext)

  const deliveryAddressSchema = zod.object({
    cep: zod
      .string()
      .nonempty('O CEP é obrigatório')
      .min(8, 'O CEP deve ter 8 dígitos numéricos somente')
      .max(8, 'O CEP deve ter 8 dígitos numéricos somente'),
    street: zod.string().nonempty('O endereço é obrigatório'),
    number: zod.string().min(1).nonempty('O número é obrigatório'),
    complement: zod.string(),
    neighborhood: zod.string().nonempty('O bairro é obrigatório'),
    city: zod.string().min(3).nonempty('A cidade é obrigatória'),
    state: zod
      .string()
      .min(2, 'UF deve ter 2 caracteres')
      .max(2, 'UF deve ter 2 caracteres')
      .nonempty('UF é obrigatório'),
    paymentMethod: zod.string().nonempty('A forma de pagamento é obrigatória'),
  })

  const { register, handleSubmit, setValue } = useForm({
    resolver: zodResolver(deliveryAddressSchema),
  })

  useEffect(() => {
    setValue('paymentMethod', paymentMethod)
  }, [paymentMethod, setValue])

  return (
    <form onSubmit={handleSubmit(handleCreateNewOrder)}>
      <CartContainer>
        <LeftColumnContainer>
          <OrderContainer>
            <div>
              <MapPin size={22} />
              <div>
                <h3>Endereço de entrega</h3>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </div>
            <FormContainer>
              <CEPInput
                type="number"
                placeholder="CEP - Somente números"
                {...register('cep')}
                id="cep"
                name="cep"
              />
              <StreetInput
                type="text"
                placeholder="Endereço"
                id="street"
                {...register('street')}
              />
              <Address>
                <NumberInput
                  type="text"
                  id="number"
                  placeholder="Número"
                  {...register('number')}
                />
                <ComplementInput
                  type="text"
                  id="complement"
                  placeholder="Complemento"
                  {...register('complement')}
                />
              </Address>
              <CityAndNeighborhood>
                <NeighborhoodInput
                  type="text"
                  id="neighborhood"
                  placeholder="Bairro"
                  {...register('neighborhood')}
                />
                <CityInput
                  type="text"
                  id="city"
                  placeholder="Cidade"
                  {...register('city')}
                />
                <UFInput
                  type="text"
                  placeholder="UF"
                  {...register('state')}
                  id="state"
                />
              </CityAndNeighborhood>
            </FormContainer>
          </OrderContainer>
          <PaymentContainer>
            <TitleContainer>
              <CurrencyDollar />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que desejar.
                </p>
              </div>
            </TitleContainer>

            <PaymentMethodContainer>
              <PaymentMethodButton
                selected={paymentMethod === 'Credito'}
                onClick={() => {
                  setPaymentMethod('Credito')
                }}
              >
                <CreditCard />
                Crédito
              </PaymentMethodButton>
              <PaymentMethodButton
                selected={paymentMethod === 'Débito'}
                onClick={() => {
                  setPaymentMethod('Débito')
                }}
              >
                <Bank />
                Débito
              </PaymentMethodButton>
              <PaymentMethodButton
                selected={paymentMethod === 'Dinheiro'}
                onClick={() => {
                  setPaymentMethod('Dinheiro')
                }}
              >
                <Money />
                Dinheiro
              </PaymentMethodButton>
            </PaymentMethodContainer>
          </PaymentContainer>
        </LeftColumnContainer>
        <ResumeContainer>
          <h2>Cafés selecionados</h2>
          {cart.map((item) => (
            <ResumeItems
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              image_url={item.image_url}
              quantity={item.quantity}
              total={item.total}
            />
          ))}

          <TotalResumeContainer>
            <div>
              <p>Total dos itens</p>
              {FormatPrice(calculateTotalValueInCart())}
            </div>
            <div>
              <p>Entrega</p>
              R$ 3.70
            </div>
            <div>
              <h3>Total</h3>
              {FormatPrice(calculateTotalValueInCart() + 3.7)}
            </div>
          </TotalResumeContainer>
          <ConfirmButton>
            <Link to="/confirmation">Confirmar Pedido</Link>
          </ConfirmButton>
        </ResumeContainer>
      </CartContainer>
    </form>
  )
}
