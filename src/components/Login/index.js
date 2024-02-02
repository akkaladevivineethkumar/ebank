import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginContainer,
  LoginCard,
  LoginLogo,
  LoginForm,
  FormHeading,
  LoginLabel,
  LoginInput,
  LoginBtn,
  ErrMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    userId: '',
    pinGot: '',
    errorMsg: '',
  }

  onFailure = msg => {
    this.setState({errorMsg: msg})
  }

  onSuccess = jwtToken => {
    const {history} = this.props
    history.replace('/')
    Cookies.set('jwt_token', jwtToken, {expires: 30})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, pinGot} = this.state
    const userDetails = {user_id: userId, pin: pinGot}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const jsonRes = await response.json()
    console.log(jsonRes)
    if (response.ok === true) {
      this.onSuccess(jsonRes.jwt_token)
    } else {
      this.onFailure(jsonRes.error_msg)
    }
  }

  getUserID = event => {
    this.setState({userId: event.target.value})
  }

  getUserPin = event => {
    this.setState({pinGot: event.target.value})
  }

  LoginForm = () => {
    const {errorMsg} = this.state
    return (
      <>
        <LoginContainer>
          <LoginCard>
            <LoginLogo
              alt="website login"
              src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            />
          </LoginCard>
          <LoginForm onSubmit={this.onSubmitForm}>
            <FormHeading>Welcome Back!</FormHeading>
            <div
              style={{display: 'flex', flexDirection: 'column', margin: '16px'}}
            >
              <LoginLabel htmlFor="userId">User ID</LoginLabel>
              <LoginInput
                onChange={this.getUserID}
                id="userId"
                placeholder="Enter User ID"
                type="text"
              />
            </div>
            <div
              style={{display: 'flex', flexDirection: 'column', margin: '16px'}}
            >
              <LoginLabel htmlFor="pin">PIN</LoginLabel>
              <LoginInput
                onChange={this.getUserPin}
                id="pin"
                placeholder="Enter PIN"
                type="password"
              />
            </div>
            <LoginBtn type="submit">Login</LoginBtn>
            <ErrMsg>{errorMsg}</ErrMsg>
          </LoginForm>
        </LoginContainer>
      </>
    )
  }

  render() {
    const getJwtToken = Cookies.get('jwt_token')
    if (getJwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return <>{this.LoginForm()} </>
  }
}
export default Login
