import { Issue } from '../../../../contexts/IssuesContext'
import { formatDistanceToNow } from 'date-fns'
import { PostCardContainer } from './styles'
import { ptBR } from 'date-fns/locale/pt-BR'

interface PostCardProps {
  issue: Issue
}

export function PostCard({ issue }: PostCardProps) {
  const formattedDate = formatDistanceToNow(new Date(issue.created_at), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <PostCardContainer to={`post/${issue.number}`}>
      <header>
        <h2>{issue.title}</h2>
        <span>{formattedDate}</span>
      </header>
      <p className="content">{issue.body}</p>
    </PostCardContainer>
  )
}
