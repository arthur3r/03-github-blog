import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 4.5rem 0 3rem;

  .publications {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h3 {
      font-size: 1.125rem;
      font-weight: bold;
      color: ${({ theme }) => theme['base-subtitle']};
    }

    > span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-span']};
    }
  }
`

export const SearchFormInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme['base-border']};
  background-color: ${({ theme }) => theme['base-input']};
  color: ${({ theme }) => theme['base-text']};
  border-radius: 6px;

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }

  &:focus {
    border-color: ${({ theme }) => theme['base-primary']};
  }
`
