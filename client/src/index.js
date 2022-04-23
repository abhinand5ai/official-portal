import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

// styles
import 'bootstrap/scss/bootstrap.scss'
import 'assets/scss/paper-kit.scss?v=1.3.0'
import 'assets/demo/demo.css?v=1.3.0'
import LandingPage from 'views/homepage/LandingPage'
import LoginPage from 'views/userlogin/LoginPage'
import JobPostings from 'views/jobs/JobPostings'
import EventsPage from 'views/events/EventsPage'
import AddEvent from 'views/events/AddEvent'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" render={props => <LandingPage {...props} />} />
      <Route path="/login" render={props => <LoginPage {...props} />} />
      <Route path="/events" render={props => <EventsPage {...props} />} />
      <Route path="/add-event" render={props => <AddEvent {...props} />} />
      <Route path="/jobs" render={props => <JobPostings {...props} />} />

      <Redirect to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
