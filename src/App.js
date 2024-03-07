import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  c = "Project";
  
  render() {
    return (
      <>
        <Router>
          <h1 className='text-center'>Class Component {this.c}</h1>
          <NavBar />

          <Routes>
            <Route path="/" element={<News pageSize={9} country={"in"} category={"general"} />} />
            <Route path="/business" element={<News pageSize={9} country={"in"} category={"business"} />} />
            <Route path="/entertainment" element={<News pageSize={9} country={"in"} category={"entertainment"} />} />
            <Route path="/general" element={<News pageSize={9} country={"in"} category={"general"} />} />
            <Route path="/health" element={<News pageSize={9} country={"in"} category={"health"} />} />
            <Route path="/science" element={<News pageSize={9} country={"in"} category={"science"} />} />
            <Route path="/sports" element={<News pageSize={9} country={"in"} category={"sports"} />} />
            <Route path="/technology" element={<News pageSize={9} country={"in"} category={"technology"} />} />
          </Routes>
        </Router>
      </>
    )
  }
}
