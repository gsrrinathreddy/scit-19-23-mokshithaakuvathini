
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Aboutus from './components/pages/Aboutus';
import Qualification from './components/pages/Qualification';

import Hobbies from './components/pages/Hobbies';
import Skills from './components/pages/Skills';
import Experience from './components/pages/Experience';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/Aboutus" element={<Aboutus/>}/>
      <Route path="/Qualification" element={<Qualification/>}/>
      <Route path="/Skills" element={<Skills/>}/>
      <Route path="/Hobbies" element={<Hobbies/>}/>
      <Route path="/Experience" element={<Experience/>}/>

      
    </Routes>
    </BrowserRouter>

     </div>
  );

}
export default App;
