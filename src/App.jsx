import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner'
import Platforms from './components/Platforms';
import Download from './components/Download';
import Business from './components/Business';
const App = () => {
  return (
    <>
      <Router>
      <Navbar />
    </Router>
    <Banner />
    <Platforms />
    <Download />
    <Business />
    </>

  );
};

export default App;
