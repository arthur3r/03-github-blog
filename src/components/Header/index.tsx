import bgImg from '../../assets/background-header.png'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={bgImg} alt="" />
    </HeaderContainer>
  )
}
