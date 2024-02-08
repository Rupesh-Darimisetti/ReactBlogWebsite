import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import PageWrapper from './components/PageWrapper';
//pages
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home';

function App() {
  return (
    <Router>
      <PageWrapper>
        <Routes>
          <Route
            exact={true}
            path='/'
            Component={Home}
          />
          <Route
            path='/about'
            Component={About}
          />
          <Route
            path='/contact'
            Component={Contact}
          />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;
