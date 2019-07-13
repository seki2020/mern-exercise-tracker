import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/Navbar'
import ExercisesList from './components/ExercisesList'
import EditExercise from './components/EditExercise'
import CreateExercise from './components/CreateExercise'
import CreateUser from './components/CreateUser'

function App() {
  return (
    <Router>
      <div className="overflow-hidden">
        <Navbar />
        <div className="container overflow-auto mt-5">
          <Route path="/" exact component={ExercisesList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
        </div>
      </div>
    </Router>
  );
}

export default App;
