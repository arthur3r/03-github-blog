import styled from 'styled-components'

export const PostInfoContainer = styled.section`
  padding: 2rem;
  background: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  margin-top: -5rem;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);

  position: relative;
  z-index: 2;

  > h1 {
    color: ${({ theme }) => theme['base-title']};
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`

export const PostInfoLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;

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

export const PostInfoDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  .item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme['base-span']};
  }
`
