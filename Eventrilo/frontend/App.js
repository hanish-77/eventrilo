import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CreateEvent from './pages/CreateEvent';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/create" component={CreateEvent} />
            </Switch>
        </Router>
    );
};

export default App;

