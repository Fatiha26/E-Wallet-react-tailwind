import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner'
import Platforms from './components/Platforms';
const App = () => {
  return (
    <>
      <Router>
      <Navbar />
    </Router>
    <Banner />
    <Platforms />
    </>

  );
};

export default App;
