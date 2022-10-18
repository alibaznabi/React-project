import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Roadmap from './Components/Roadmap/Roadmap'
import Faqs from './Components/Faqs/Faqs'
import Footersec from './Components/Footersec/Footer'
import Distribution from'./Components/Distribution/Distribution'
import Team from './Components/Team/Team';


function App() {
  return (
    <div>
      <Navbar/>
      <Roadmap/>
      <Distribution/>
      <Team/>
      <Faqs/>
      <Footersec/>
      
    </div>
  );
}

export default App;
