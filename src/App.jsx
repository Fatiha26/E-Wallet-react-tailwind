import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner'
import Platforms from './components/Platforms';
import Download from './components/Download';
import Business from './components/Business';
import New from './components/New';
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
    <New />
    </>

  );
};

export default App;
