import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import PageWrapper from './components/PageWrapper';
import Home from './components/Pages/Home';
function App() {
  return (
    <Router>
      <PageWrapper>
        <Routes>
          <Route
            path='/'
            Component={Home}
          />
        </Routes>
      </PageWrapper>
    </Router>
  );
}

export default App;
