import { useParams } from 'react-router-dom'
import { PostContent } from './components/PostContent'
import { PostInfo } from './components/PostInfo'

import { PostContainer } from './styles'
import { useEffect } from 'react'
import { Spinner } from '../../components/Spinner'
import { useContextSelector } from 'use-context-selector'
import { IssuesContext } from '../../contexts/IssuesContext'

export function Post() {
  const { issueDataDetails, fetchIssueDataDetails, isLoading } =
    useContextSelector(IssuesContext, (context) => {
      return {
        issueDataDetails: context.issueDataDetails,
        fetchIssueDataDetails: context.fetchIssueDataDetails,
        isLoading: context.isLoading,
      }
    })
  const { number } = useParams()

  useEffect(() => {
    fetchIssueDataDetails(number)
  }, [fetchIssueDataDetails, number])

  return (
    <PostContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <PostInfo issue={issueDataDetails} />
          <PostContent issue={issueDataDetails} />
        </>
      )}
    </PostContainer>
  )
}
