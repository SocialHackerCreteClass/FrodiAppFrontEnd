import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import PropTypes from "prop-types"
import { cx } from "emotion"
import Input from "components/Input"
import Button from "components/Button"
import { useI18n } from "providers/I18n"

Login.propTypes = {
  setLoggedStatus: PropTypes.func
}

function Login(props) {
  const { t } = useI18n()
  const history = useHistory()

  const { setLoggedStatus } = props

  function login() {
    setLoggedStatus(true)
    history.push("/")
  }

  function logout() {
    setLoggedStatus(false)
    history.push("/login")
  }

  const [formData, setFormData] = useState({ email: "", password: "" })

  function handleSubmit() {
    console.log(formData)
  }

  return (
    <div>
      <h3>{`${t("int.login")}`}</h3>
      <form>
        <label>
          Email
          <Input
            name="email"
            type="email"
            onChange={(value) => setFormData({ ...formData, email: value })}
          />
        </label>
        <label>
          Password
          <Input
            onChange={(value) => setFormData({ ...formData, password: value })}
            type="password"
          />
        </label>

        <Button onClick={handleSubmit}>Submit</Button>
      </form>

      <Button onClick={login}>Log In</Button>
      <Button onClick={logout}>Log Out</Button>
      <hr />

      <br />
    </div>
  )
}

export default Login
