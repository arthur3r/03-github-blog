import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { PostInfoContainer, PostInfoLinks, PostInfoDetails } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function PostInfo() {
  return (
    <PostInfoContainer>
      <PostInfoLinks>
        <a href="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          voltar
        </a>
        <a href="https://github.com/arthur3r" target="_blank" rel="noreferrer">
          ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
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
