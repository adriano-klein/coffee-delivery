import styled from 'styled-components'

export const BannerContainer = styled.div`
  display: flex;
  gap: 3.5rem;
  margin-top: 6rem;
  margin-bottom: 5.75rem;
`

export const LeftSideBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 1rem;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
  }
`
const BG_COLORS = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
  'base-subtitle': 'base-subtitle',
}

interface IconColorProps {
  bgcolor: 'yellow-dark' | 'yellow' | 'purple' | 'base-subtitle'
}

export const IconDiv = styled.div<IconColorProps>`
  padding: 0.5rem;
  background-color: ${(props) => props.theme[BG_COLORS[props.bgcolor]]};
  border-radius: 50%;
  display: flex;

  svg {
    color: ${(props) => props.theme.white};
  }
`

export const IconContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 4rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
