import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

export interface Issue {
  id: number
  title: string
  body: string
  created_at: Date
  comments: number
  html_url: string
  number: number
  user: {
    login: string
  }
}

interface IssuesContextProps {
  issues: Issue[]
  isLoading: boolean
  fetchIssues: (query?: string) => Promise<void>
}

export const IssuesContext = createContext({} as IssuesContextProps)

interface IssuesContextProviderProps {
  children: ReactNode
}

export function IssuesContextProvider({
  children,
}: IssuesContextProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])
  const [isLoading, setIsLoading] = useState(false)

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

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <IssuesContext.Provider
      value={{
        issues,
        fetchIssues,
        isLoading,
      }}
    >
      {children}
    </IssuesContext.Provider>
  )
}
