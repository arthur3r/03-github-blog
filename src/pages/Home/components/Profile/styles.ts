import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background: ${({ theme }) => theme['base-profile']};
  border-radius: 10px;
  padding: 2rem 2rem 2rem 2.5rem;
  margin-top: -5rem;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);

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
