import styled from 'styled-components'

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  justify-content: space-between;
  background-color: ${(props) => props.theme['base-card']};

  img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 1.25rem;

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

const BaseButton = styled.div`
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.5rem;
  justify-content: center;
  align-content: center;
  align-items: baseline;
  gap: 0.3rem;

  > div {
    display: flex;
    gap: 0.5rem;
  }

  svg {
    color: ${(props) => props.theme.purple};

    :hover {
      cursor: pointer;
    }
  }
`
export const AmountAndTrash = styled(BaseButton)`
  flex-direction: row;
  justify-content: space-between;
`

export const TrashContainer = styled(BaseButton)`
  display: flex;
  font-size: 0.75rem;
  align-items: center;
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const RightContainer = styled.div``
