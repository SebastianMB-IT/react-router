import logo from './logo.svg';
import './App.css';
import { Link, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='buttons'>
          <Link to='/first' className={`button ${location.pathname === '/first' ? 'active' : ''}`}>
            First
          </Link>
          <Link to='/second' className={`button ${location.pathname === '/second' ? 'active' : ''}`}>
            Second
          </Link>
          <Link to='/third' className={`button ${location.pathname === '/third' ? 'active' : ''}`}>
            Third
          </Link>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
