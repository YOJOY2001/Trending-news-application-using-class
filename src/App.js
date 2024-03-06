import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'

export default class App extends Component {
  c="Project"
  render() {
    return (
      <>
        <h1 style={{textAlign: "center"}}>Class Component {this.c}</h1>
        <NavBar/>
        <News/>
      </>
    )
  }
}