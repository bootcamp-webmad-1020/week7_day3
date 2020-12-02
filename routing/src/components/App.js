import './App.css'

import Home from './Home'
import About from './About'
import Profile from './Profile'
import Navigation from './Navbar'
import RoutePmsQueryStr from './RoutePmsQueryStr'

import { Switch, Route, Redirect } from 'react-router-dom'

function App() {

  // const loggedInUser = { username: 'German', birth: new Date(1986, 4, 23), height: 192 }
  const loggedInUser = undefined

  return (
    <>
      <Navigation />

      <main>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/perfil" render={() => loggedInUser ? <Profile {...loggedInUser} /> : <Redirect to="/" />} />
          <Route path="/vuelos/:flightType" render={props => <RoutePmsQueryStr {...props} />} />
        </Switch>
      </main>
    </>
  );
}

export default App