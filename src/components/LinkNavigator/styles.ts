import styled from 'styled-components'

export const LinkNavigatorContainer = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.blue};
    font-size: 0.75rem;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;

    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s;

    &:hover {
      border-bottom-color: ${({ theme }) => theme.blue};
    }

    > svg {
      font-size: 12px;
    }
  }
`
