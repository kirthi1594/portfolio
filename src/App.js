
import './App.css';
import { About } from './component/About';
import { Contact } from './component/Contact';
import GithubCalender from './component/GithubCalendar';
import { Home } from './component/Home';
import  Navbar  from './component/Navbar';
import { Projects } from './component/Projects';
import { Skills } from './component/Skills';

function App() {
  return (
    <div className="App" >
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    {/* <GithubCalender/> */}
    <Contact/>
  

    </div>
  );
}

export default App;
