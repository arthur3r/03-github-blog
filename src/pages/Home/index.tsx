import { useContextSelector } from 'use-context-selector'
import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { HomeContainer } from './styles'
import { IssuesContext } from '../../contexts/IssuesContext'
import { Spinner } from '../../components/Spinner'

export function Home() {
  const { issues, isLoading } = useContextSelector(IssuesContext, (context) => {
    return {
      issues: context.issues,
      isLoading: context.isLoading,
    }
  })

  return (
    <HomeContainer>
      <Profile />
      <SearchForm />

      <main>
        {isLoading ? (
          <Spinner />
        ) : (
          issues.map((issue) => <PostCard key={issue.id} issue={issue} />)
        )}
      </main>
    </HomeContainer>
  )
}
