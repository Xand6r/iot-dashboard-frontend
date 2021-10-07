import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Index';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import './App.scss';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />
          <header className="App-header">
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/dashboard/:labid" component={Dashboard} exact />
            </Switch>
          </header>
        </Router>
    </div>
  );
}

export default App;
