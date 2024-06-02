import { Link, LinkProps, NavLink } from 'react-router-dom'
import { LinkNavigatorContainer } from './styles'
import { ReactNode } from 'react'

interface LinkNavigatorProps extends LinkProps {
  type: 'link' | 'navigate'
  children: ReactNode
  to: string
}

export function LinkNavigator({ children, to, type }: LinkNavigatorProps) {
  return (
    <LinkNavigatorContainer>
      {type === 'link' ? (
        <Link target="_blank" to={to}>
          {children}
        </Link>
      ) : (
        <NavLink to={to}>{children}</NavLink>
      )}
    </LinkNavigatorContainer>
  )
}
