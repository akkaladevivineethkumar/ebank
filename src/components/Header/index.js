import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {HeaderContainer, WebsiteLogo, LogOutBtn} from './styledComponents'

const Header = props => {
  const isLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }
  return (
    <HeaderContainer>
      <WebsiteLogo
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png "
      />
      <LogOutBtn onClick={isLogout} type="button">
        Logout
      </LogOutBtn>
    </HeaderContainer>
  )
}
export default withRouter(Header)
