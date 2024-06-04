import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { LinkNavigator } from '../../../../components/LinkNavigator'
import {
  ProfileContainer,
  ProfileContent,
  ProfileFooter,
  ProfileHeader,
} from './styles'
import { Spinner } from '../../../../components/Spinner'

interface User {
  name: string
  bio: string
  avatar_url: string
  html_url: string
  login: string
  followers: number
}

export function Profile() {
  const [user, setUser] = useState<User>({} as User)
  const [isLoading, setIsLoading] = useState(false)

  const fetchUser = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get('users/arthur3r')
      setUser(response.data)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <ProfileContainer>
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </ProfileContainer>
  )
}
