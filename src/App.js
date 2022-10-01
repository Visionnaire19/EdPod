import { Router } from "@reach/router";
import './App.css';
import MainPage from './pages/MainPage.js';

function App() {
  return (
    <div className="App">
      <div className="App-container">
      <Router>
        <MainPage path="/"/>
        </Router>
        
    </div>
    </div>
  );
}

export default App;
