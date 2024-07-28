import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Banner from './components/Banner'
const App = () => {
  return (
    <>
      <Router>
      <Navbar />
    </Router>
    <Banner />
    </>

  );
};

export default App;
