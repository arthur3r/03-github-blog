import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { PostInfoContainer, PostInfoLinks, PostInfoDetails } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { LinkNavigator } from '../../../../components/LinkNavigator'
import { Issue } from '../../../../contexts/IssuesContext'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

interface PostInfoProps {
  issue: Issue
}

export function PostInfo({ issue }: PostInfoProps) {
  const formattedDate = formatDistanceToNow(new Date(issue.created_at), {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <PostInfoContainer>
      <PostInfoLinks>
        <LinkNavigator type="navigate" to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          voltar
        </LinkNavigator>
        <LinkNavigator type="link" to={issue.html_url}>
          ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </LinkNavigator>
      </PostInfoLinks>

      <h1>{issue.title}</h1>

      <PostInfoDetails>
        <div className="item">
          <FontAwesomeIcon icon={faGithub} />
          <span>{issue.user.login}</span>
        </div>

        <div className="item">
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>{formattedDate}</span>
        </div>

        <div className="item">
          <FontAwesomeIcon icon={faComment} />
          <span>{issue.comments} comentários</span>
        </div>
      </PostInfoDetails>
    </PostInfoContainer>
  )
}
