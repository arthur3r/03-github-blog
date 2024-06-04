import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

export interface Issue {
  id: number
  title: string
  body: string
  created_at: string
  comments: number
  html_url: string
  number: number
  user: {
    login: string
  }
}

interface IssuesContextProps {
  issues: Issue[]
  issueDataDetails: Issue
  isLoading: boolean
  fetchIssues: (query?: string) => Promise<void>
  fetchIssueDataDetails: (query?: string) => Promise<void>
}

export const IssuesContext = createContext({} as IssuesContextProps)

interface IssuesContextProviderProps {
  children: ReactNode
}

export function IssuesContextProvider({
  children,
}: IssuesContextProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])
  const [issueDataDetails, setIssueDataDetails] = useState<Issue>({} as Issue)
  const [isLoading, setIsLoading] = useState(true)

  const fetchIssues = useCallback(async (query?: string) => {
    try {
      setIsLoading(true)

      if (!query) {
        const response = await api.get('search/issues', {
          params: {
            q: 'repo:arthur3r/posts-blog',
          },
        })

        setIssues(response.data.items)
      } else {
        const response = await api.get('search/issues', {
          params: {
            q: `${query} repo:arthur3r/posts-blog`,
          },
        })
        setIssues(response.data.items)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const fetchIssueDataDetails = useCallback(async (number?: string) => {
    try {
      setIsLoading(true)

      if (!number) return

      const response = await api.get(
        `/repos/arthur3r/posts-blog/issues/${number}`,
      )

      setIssueDataDetails(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <IssuesContext.Provider
      value={{
        issues,
        issueDataDetails,
        fetchIssues,
        fetchIssueDataDetails,
        isLoading,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
