import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

// Components 
import Nav from './components/Nav';
// import Home from './pages/Home';
// import Footer from './components/Footer';
// import Villa from './pages/Villa';
// import contact from './components/contact';
class App extends Component {
  render() {
    return (
      <div className="App">
        <>
          <Router>
            <div>
              <Nav />
              <Switch>
                {/* <Route path='/' exact component={Home} /> */}
                {/* <Route path='/Resume' component={Resume} /> */}
              </Switch>
            </div>
          </Router>
          {/* <Footer /> */}
        </>
      </div>
    )
  }
}

export default App;