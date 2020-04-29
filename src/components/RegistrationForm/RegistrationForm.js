import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Required, Label } from '../Form/Form'
import AuthApiService from '../../services/auth-api-service'
import Button from '../Button/Button'
import './RegistrationForm.css'

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  }

  state = { error: null }

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault()
    const { name, username, password } = ev.target
    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value,
    })
      .then(user => {
        name.value = ''
        username.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  componentDidMount() {
    this.firstInput.current.focus()
  }

  render() {
    const { error } = this.state
    return (
      <form
        className='registration-form'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p>{error}</p>}
        </div>
        <div>
        <h2 id='sign-up'>Sign up</h2>
          <Label htmlFor='registration-name-input'>
            Enter your name<Required />
          </Label>
          <Input
            ref={this.firstInput}
            id='registration-name-input'
            name='name'
            required
          />
        </div>
        <div>
          <Label htmlFor='registration-username-input'>
            Choose a username<Required />
          </Label>
          <Input
            id='registration-username-input'
            name='username'
            required
          />
        </div>
        <div>
          <Label htmlFor='registration-password-input'>
            Choose a password<Required />
          </Label>
          <Input
            id='registration-password-input'
            name='password'
            type='password'
            required
          />
        </div>
        <div class="demo">
          <p>To view demo use:</p>
            <p>Email:User</p>
            <p>Passwod: Password123!</p>
        </div>
        <footer>
          {/* These the demo credentials*/}
          <Button type='submit'>
            Sign up
          </Button>
          <p>The app aims to simulate flash card drills more effectively by automating the 
            Spaced Repetition learning technique. The app tracks the users performance history for each word,
             revisiting words which have proven to be more challenging for the use with a higher frequency.
              The app utilizes user authorization, automatic log out on inactivity, data persistence, and score keeping.</p>
             {/* explains the app*/}
          {' '}
          <Link to='/login'>Already have an account?</Link>
        </footer>
      </form>
    )
  }
}

export default RegistrationForm
