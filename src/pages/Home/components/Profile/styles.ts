import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  padding: 2rem 2rem 2rem 2.5rem;
  margin-top: -5rem;

  position: relative;
  z-index: 2;
`

export const ProfileContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  .avatar {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  p {
    margin: 0.5rem 0 1.5rem;
  }
`

export const ProfileHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme['base-title']};
  }

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

export const ProfileFooter = styled.footer`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  .item {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span {
      color: ${({ theme }) => theme['base-subtitle']};
    }

    svg {
      font-size: 14px;
      color: ${({ theme }) => theme['base-label']};
    }

    &:first-child {
      svg {
        font-size: 18px;
      }
    }
  }
`