import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem !important;
    border-radius: 6px;

    background-color: ${(props) => props.theme['purple-light']};

    svg:first-child {
      color: ${(props) => props.theme.purple};
    }

    p {
      color: ${(props) => props.theme.purple} !important;
    }
  }
`

export const CartButton = styled.button`
  cursor: pointer;
  padding: 0.5rem;
  border: none;
  position: relative;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  //coloque o span totalQuantityInCart no canto superior direito do svg do carrinho, fundo yellow-dark e cantos arredondados
  span {
    position: absolute;
    top: -0.7rem;
    right: -0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme['yellow-light']};
  }
`
