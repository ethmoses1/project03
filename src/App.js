import React from 'react'
import Home from './components/Home.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Reviews from './components/Reviews.js'
import './App.css'
import Notes from './components/Notes.js'
import ReviewForm from './components/ReviewForm.js'


function App() {
  return (
    <div className="App">

       <Router>


         <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/reviews" component={Reviews}>
            <Reviews />
          </Route>
          <Route path="/reviews/:id" component={Reviews}>
            <Reviews />
          </Route>
          <Route exact path="Notes">
            <Notes />
          </Route>
          <Route exact path="ReviewForm">
            <ReviewForm />
          </Route>
        </Switch>

       </Router>

    </div>
  );
}

export default App;
