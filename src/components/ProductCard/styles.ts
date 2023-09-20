import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 16rem;
  height: 19.375rem;
  align-items: center;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  margin-bottom: 4rem;

  img {
    height: 7.5rem;
    width: 7.5rem;
    margin-top: -2rem;
  }

  p {
    text-align: center;
  }
`

export const ProductCategory = styled.span`
  font-size: 0.5rem;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  padding: 0.3rem 0.5rem;
  border-radius: 10px;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
`

export const ProductTitle = styled.h3`
  font-family: 'Baloo 2';
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 0.5rem;
`

export const ProductDescription = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400 !important;
  line-height: 130%;
  color: ${(props) => props.theme['base-label']};
  padding: 0 1.25rem;
  text-align: center;
`

export const ProductFooter = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1.5rem;
`

export const PriceContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: baseline;
`

export const AmountContainer = styled.div`
  display: flex;
  gap: 0.2rem;
  background-color: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  border-radius: 8px;
  align-items: center;

  svg {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const AmountContainerAndCart = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  gap: 0.5rem;

  svg {
    cursor: pointer;
  }

  button {
    width: 2.375rem;
    height: 2.375rem;
    border: 0;
    background-color: ${(props) => props.theme['purple-dark']};
    border-radius: 6px;

    &:hover {
      background-color: ${(props) => props.theme.purple};
      cursor: pointer;
    }

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
