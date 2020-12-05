import Routes from './Routes';
import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/github' component={() => { 
     window.location.href = 'https://github.com/adenrashid'; 
     return null;
}}/>
          <Route path='/linkedin' component={() => { 
     window.location.href = 'https://www.linkedin.com/in/adenrashid/'; 
     return null;
}}/>
        </Switch>
      </Router>
      {/* <Routes /> */}
    </div>
  );
}

export default App;