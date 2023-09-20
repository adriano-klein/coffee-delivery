import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const LeftColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.75rem;
`

export const BaseCartContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`

export const OrderContainer = styled(BaseCartContainer)`
  flex-direction: column;
  width: 100%;
  height: auto;

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  > div {
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;
    align-self: stretch;
  }
`

const BaseInput = styled.input`
  padding: 12px;
  align-items: center;
  border-radius: 4px;
  border: 1px solid var(--base-button, #e6e5e5);
  background: var(--base-input, #ededed);
`

export const CEPInput = styled(BaseInput)`
  width: 50%;
`
export const StreetInput = styled(BaseInput)`
  width: 100%;
`
export const NumberInput = styled(BaseInput)`
  width: 30%;
`
export const ComplementInput = styled(BaseInput)`
  flex: 1;
  width: 70%;
`
export const Address = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const NeighborhoodInput = styled(BaseInput)`
  width: 30%;
`

export const CityAndNeighborhood = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const CityInput = styled(BaseInput)`
  flex: 1;
`

export const UFInput = styled(BaseInput)`
  width: 10%;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`
export const ResumeContainer = styled(BaseCartContainer)`
  display: flex;
  width: 100%;
  max-width: 28rem;
  height: 80%;
  flex-direction: column;
  border-radius: 6px 44px;
`

export const TotalResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;

  div {
    display: flex;
    justify-content: space-between;
    line-height: 2rem;
  }
`

export const ConfirmButton = styled.button`
  display: flex;
  padding: 0.75rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  border: 0;
  background-color: ${(props) => props.theme.yellow};
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 1.5rem;

  &&:hover {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
  }
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  align-items: flex-start;
  border-radius: 6px;
  gap: 0.5rem;
  align-items: start;

  background-color: ${(props) => props.theme['base-card']};

  svg {
    color: ${(props) => props.theme.purple};
    font-size: 1.3rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
interface PaymentMethodButtonProps {
  selected: boolean
}

export const PaymentMethodButton = styled.button<PaymentMethodButtonProps>`
  margin-top: 1rem;
  height: 3.5rem;
  width: 250px;
  padding: 1rem;
  border: ${(props) =>
    props.selected ? '2px solid #8047F8' : '0px solid #E6E5E5'};
  border-radius: 6px;
  background-color: ${(props) =>
    props.selected ? props.theme['purple-light'] : props.theme['base-button']};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &&:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.selected ? props.theme['purple-light'] : props.theme['base-hover']};
  }
`
