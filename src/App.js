import React, { Component } from 'react';
import './App.css';
import MicroSideBar from './MicroSideBar/MicroSideBar.js';
import Radium, {StyleRoot} from 'radium';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './Header/Header';
import Body from './Body/Body';

// VIP: There is 1 important job every React Component must do -> return/render some HTML which can be rendered to screen.
// VIP: In reality the HTML within this class is NOT HTML, its in fact JSX, synctatical sugar.
class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
    /* You might see in many projects/tutorials other initializing 'state' here.
        That is ok, it can also be done here, but in ES6, you can now define 'state'
        outside the constructor()*/
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  render() {
    console.log('[App.js] Inside render()');

    return (
      <BrowserRouter>
        {/* This damn <StyleRoot> killed me. It made me lose hours of time because it was somehow 
            breaking my Router Links - they were not working at all in Header.js.
            Finally I removed this StyleRoot from here, and added it to Persons.js and finally the
            Router Links worked properly!!
        */}
        {/* <StyleRoot> */}
            <div className="App">
              <Header/>
              {/* <Body/> */}
              {/*<MicroSideBar/>*/}
              {
                /*
                Dumb Twitter Thing Which Broke Stuff
                <a className="twitter-timeline"
                    href="https://twitter.com/PEPFAR?ref_src=twsrc%5Etfw">Tweets by PEPFAR</a>
                */
              }
            </div>
        {/* </StyleRoot> */}
      </BrowserRouter>
    );

    /* FYI: This is an alternative way to declaring JSX (HTML within a Component), but don't ever do this, its cumbersome/painful.
    This is simply for illustration purposes to show that the HTML code actually gets compiled into something that looks like this.
    This is also why we always need to "import React", because internally the compilation happens. */

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Welcome to React!'));
  }
}

export default Radium(App);

/* This was the previous code, before I added Radium package.
    Radium is a Decorator, or Higher Level component which wraps the whole App Component
    with additional functionality, which in this case, enables the use of advanced CSS stuff.
*/
// export default App;
