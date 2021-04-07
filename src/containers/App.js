import Home from './Home';
import Artists from './Artists';
import ArtistsEvents from './ArtistsEvents';
import PageNotFound from './PageNotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './bootstrap.min.css';

function App() {
  return (
    <div className="">

      <Router >

        <Switch>
          <Route exact path="/" component={Home} />

          <Route
            path="/artists"
            render={(props) => <Artists {...props} />}
          />

          <Route
            path="/artists-events"
            render={(props) => <ArtistsEvents {...props} />}
          />

          <Route component={PageNotFound} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
