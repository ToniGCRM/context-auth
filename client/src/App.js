import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
)
export default App;
