import logo from './logo.svg';
import './App.css';
import Potfolio from './Components/potfolio';
import About from './Components/about';
import Contact from './Components/Contact';
import Project from './Components/project';
import AppRouter from './config/route';

function App() {
  return (
    <div>
      <AppRouter/>
      {/* <Potfolio /> */}
      {/* <Routes>
        <Route path="/" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes> */}
    </div>
  );
}

export default App;
