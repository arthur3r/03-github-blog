import { PostCard } from './components/PostCard'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchForm />

      <main>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </main>
    </HomeContainer>
  )
}
