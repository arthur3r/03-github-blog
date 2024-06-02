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

export function PostInfo() {
  return (
    <PostInfoContainer>
      <PostInfoLinks>
        <LinkNavigator type="navigate" to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          voltar
        </LinkNavigator>
        <LinkNavigator type="link" to="https://github.com/arthur3r">
          ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </LinkNavigator>
      </PostInfoLinks>

      <h1>JavaScript data types and data structures</h1>

      <PostInfoDetails>
        <div className="item">
          <FontAwesomeIcon icon={faGithub} />
          <span>arthur3r</span>
        </div>

        <div className="item">
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>Há 1 dia</span>
        </div>

        <div className="item">
          <FontAwesomeIcon icon={faComment} />
          <span>5 comentários</span>
        </div>
      </PostInfoDetails>
    </PostInfoContainer>
  )
}
