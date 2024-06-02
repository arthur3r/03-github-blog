/* eslint-disable camelcase */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { LinkNavigator } from '../../../../components/LinkNavigator'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'
import {
  ProfileContainer,
  ProfileContent,
  ProfileFooter,
  ProfileHeader,
} from './styles'

interface User {
  name: string
  avatar_url: string
  bio: string
  login: string
  followers: number
  html_url: string
}

export function Profile() {
  const [user, setUser] = useState({} as User)

  const fetchUser = useCallback(async () => {
    try {
      const response = await api.get('users/arthur3r')
      const { name, avatar_url, bio, login, followers, html_url } =
        response.data
      setUser({ name, avatar_url, bio, login, followers, html_url })
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <ProfileContainer>
      <ProfileContent>
        <img className="avatar" src={user.avatar_url} alt="" />

        <section>
          <ProfileHeader>
            <h2>{user.name}</h2>
            <LinkNavigator type="link" to={user.html_url}>
              github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </LinkNavigator>
          </ProfileHeader>
          <p>{user.bio}</p>
          <ProfileFooter>
            <div className="item">
              <FontAwesomeIcon icon={faGithub} />
              <span>{user.login}</span>
            </div>

            <div className="item">
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{user.followers} seguidores</span>
            </div>
          </ProfileFooter>
        </section>
      </ProfileContent>
    </ProfileContainer>
  )
}
