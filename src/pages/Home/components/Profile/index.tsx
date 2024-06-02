import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  ProfileContainer,
  ProfileContent,
  ProfileFooter,
  ProfileHeader,
} from './styles'
import { LinkNavigator } from '../../../../components/LinkNavigator'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileContent>
        <img className="avatar" src="https://github.com/arthur3r.png" alt="" />

        <section>
          <ProfileHeader>
            <h2>Arthur Freire Ribeiro</h2>
            <LinkNavigator type="link" to="https://github.com/arthur3r">
              github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </LinkNavigator>
          </ProfileHeader>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <ProfileFooter>
            <div className="item">
              <FontAwesomeIcon icon={faGithub} />
              <span>arthur3r</span>
            </div>

            <div className="item">
              <FontAwesomeIcon icon={faBuilding} />
              <span>Rocketseat</span>
            </div>

            <div className="item">
              <FontAwesomeIcon icon={faUserGroup} />
              <span>32 seguidores</span>
            </div>
          </ProfileFooter>
        </section>
      </ProfileContent>
    </ProfileContainer>
  )
}
