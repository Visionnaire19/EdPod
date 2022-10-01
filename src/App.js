import { Router } from "@reach/router";
import './App.css';
import MainPage from './pages/MainPage.js';
import SubjectPage from "./pages/SubjectPage";
import { AppProps } from 'next/app';

function App() {
  return (
    <div className="App">
      <div className="App-container">
      <Router>
        <MainPage path="/"/>
        <SubjectPage path="/subjects/:name"></SubjectPage>
        </Router>
        
    </div>
    </div>
  );
}

export default App;
