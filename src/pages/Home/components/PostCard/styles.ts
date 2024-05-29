import styled from 'styled-components'

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${({ theme }) => theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  height: 16.25rem;
  border: 2px solid transparent;

  &:hover {
    border-color: ${({ theme }) => theme['base-label']};
    transition: border-color 0.2s;
  }

  header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;

    > h2 {
      font-size: 1.25rem;
      font-weight: bold;
      color: ${({ theme }) => theme['base-title']};
    }

    > span {
      min-width: 3.3rem;
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-span']};
    }
  }

  .content {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`
