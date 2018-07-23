import React, {Component} from 'react';
import './Header.css';
import logo from '../logo.svg';
import Persons from '../Persons/Persons';
import {BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';
import PrimaryDataSection from '../PrimaryDataSection/PrimaryDataSection';
import SampleRouteComponent1 from '../SampleRouteComponent1/SampleRouteComponent1.js';
import SampleRouteComponent2 from '../SampleRouteComponent2/SampleRouteComponent2.js';
import SampleRouteComponent3 from '../SampleRouteComponent3/SampleRouteComponent3.js';
import SampleRouteComponent4 from '../SampleRouteComponent4/SampleRouteComponent4.js';

/*
  Before using <Link>, we did this which is the traditional way of switching b/w
    pages in HTML:

    <li><a href="/">Home</a></li>
    <li><a href="/persons">Persons</a></li>
    <li><a href="/primaryDataSection">PrimaryDataSection</a></li>
    <li><a href="/sampleRouteComponent1">SampleRouteComponent1</a></li>
    <li><a href="/sampleRouteComponent2">SampleRouteComponent2</a></li>
    <li><a href="/sampleRouteComponent3">SampleRouteComponent3</a></li>
    <li><a href="/sampleRouteComponent4">SampleRouteComponent4</a></li>

  Then we switched to using NavLink instead of Link in order to add styling for
    the active link in the <nav>. For reference, here is the old code with <Link>

    <li><Link to="/">Home</Link></li>
    <li><Link to="/persons">Persons</Link></li>
    <li><Link to="/primaryDataSection">PrimaryDataSection</Link></li>
    <li><Link to="/sampleRouteComponent1">SampleRouteComponent1</Link></li>
    <li><Link to="/sampleRouteComponent2">SampleRouteComponent2</Link></li>
    <li><Link to="/sampleRouteComponent3">SampleRouteComponent3</Link></li>
    <li><Link to="/sampleRouteComponent4">SampleRouteComponent4</Link></li>
*/

class Header extends Component {

  render() {
    let classes = ['red', 'bold'].join(' ');
    return(
      <div>
        <header className="Nav-header">
          <nav>
            <ul>
            <li>
              <NavLink
                  to="/"
                  exact
                  activeStyle={{
                    color: 'red',
                    textDecoration: 'underline'
                  }}>Home</NavLink></li>
            <li>
              <NavLink
                  to="/persons"
                  exact
                  activeStyle={{
                    color: 'red',
                    textDecoration: 'underline'
                  }}>Persons</NavLink></li>
            <li>
              <NavLink
                  to="/primaryDataSection"
                  exact
                  activeStyle={{
                    color: 'red',
                    textDecoration: 'underline'
                  }}>PrimaryDataSection</NavLink></li>
            <li>
              <NavLink
                  to="/sampleRouteComponent1"
                  exact
                  activeStyle={{
                    color: 'red',
                    textDecoration: 'underline'
                  }}>SampleRouteComponent1</NavLink></li>
            <li>
              <NavLink
                  to="/sampleRouteComponent2"
                  exact
                  activeStyle={{
                    color: 'red',
                    textDecoration: 'underline'
                  }}>SampleRouteComponent2</NavLink></li>
            <li>
              <NavLink
                  to="/sampleRouteComponent3"
                  exact
                  activeStyle={{
                    color: 'red',
                    textDecoration: 'underline'
                  }}>SampleRouteComponent3</NavLink></li>
            <li>
              <NavLink
                  to="/sampleRouteComponent4"
                  exact
                  activeStyle={{
                    color: 'red',
                    textDecoration: 'underline'
                  }}>SampleRouteComponent4</NavLink></li>
            </ul>
          </nav>
        </header>
        <header className="React-header">
          <img src={logo} className="React-logo" alt="logo" />
          <h1 className="React-title">Welcome to React!</h1>
        </header>
        <p className={classes}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <Route path="/persons" exact component={Persons}/>
          <Route path="/primaryDataSection" component={PrimaryDataSection}/>
          <Route path="/sampleRouteComponent1" component={SampleRouteComponent1}/>
          <Route path="/sampleRouteComponent2" component={SampleRouteComponent2}/>
          <Route path="/sampleRouteComponent3" component={SampleRouteComponent3}/>
          <Route path="/sampleRouteComponent4" component={SampleRouteComponent4}/>

      </div>
    );
  }
}

export default Header;
