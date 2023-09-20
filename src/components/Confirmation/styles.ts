import styled from 'styled-components'

export const ConfirmationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['yellow-dark']};
  }

  span {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Roboto', sans-serif;
  }

  section {
    border: solid 1px ${(props) => props.theme.purple};
    border-radius: 6px 36px;
    padding: 2.5rem 2.5rem 0 2.5rem;
    margin-top: 2.5rem;
  }
`

export const ResumeContainer = styled.div`
  display: flex;
  width: 526px;
  justify-content: start;

  div + div {
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    line-height: 1rem;
    align-items: start;

    span {
      line-height: 1.5rem;
    }
  }
`

interface IconColorProps {
  bgcolor: 'yellow-dark' | 'yellow' | 'purple' | 'base-subtitle'
}

export const IconDiv = styled.div<IconColorProps>`
  display: flex;
  padding: 0.5rem;
  height: 2.5rem;
  width: 2.5rem;
  justify-content: center;
  align-items: center !important;
  background-color: ${(props) => props.theme[props.bgcolor]};
  color: ${(props) => props.theme.white};
  border-radius: 50%;
  margin-right: 0.75rem;
`
