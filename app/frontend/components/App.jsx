import React from 'react'
import { Route, Switch } from 'react-router-dom'

import GreetingContainer from './greeting/greeting_container'
import SessionFormContainer from './session_form/session_form_container'
import { AuthRoute } from '../util/route_util'

const App = () => (
  <div className='app'>
    <header>
      <Switch>
        <Route path='/login' component={GreetingContainer} />
        <Route path='/signup' component={GreetingContainer} />
        <Route path='/' component={GreetingContainer} />
      </Switch>
    </header>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
)

export default App
