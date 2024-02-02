import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import {HomeContainer, HomeHeading, HomeBanner} from './styledComponents'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }
  return (
    <HomeContainer>
      <Header />
      <HomeHeading>Your Flexibility, Our Excellence</HomeHeading>
      <HomeBanner
        alt="digital card"
        src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
      />
    </HomeContainer>
  )
}

export default Home
