import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  background-color: #152850;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const LoginCard = styled.div`
  border-top-left-radius: 26px;
  border-bottom-left-radius: 26px;
  height: 90vh;
  width: 35%;
  background-color: #e0eefe;
  padding: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const LoginLogo = styled.img`
  height: 60vh;
  width: 100%;
`
export const LoginForm = styled.form`
  border-top-right-radius: 26px;
  border-bottom-right-radius: 26px;
  height: 90vh;
  width: 30%;
  background-color: #ffffff;
  padding: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const FormHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 42px;
  color: #183b56;
`
export const LoginLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: #5a7184;
  font-weight: bold;
`
export const LoginInput = styled.input`
  width: 300px;
  padding: 8px;
  border-radius: 8px;
  outline: none;
  border: 1px solid #c3cad9;
`
export const LoginBtn = styled.button`
  background-color: #1565d8;
  border-radius: 12px;
  padding: 12px;
  border: 0px;
  width: 300px;
  outline: none;
  color: white;
  margin: 16px;
`
export const ErrMsg = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ff0b37;
  margin: 16px;
  margin-top: 0px;
`
