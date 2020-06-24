import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import SearchRequest from './components/SearchRequest'
import SavedMovies from './components/SavedMovies'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={SearchRequest} />
            <Route path="/saved" component={SavedMovies} />
          </Switch>
          </div>
          </BrowserRouter>
    </div>
  );
}

export default App;
