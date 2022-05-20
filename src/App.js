import './App.css';
import Cards from './Component/Cards';
import Navbar from './Component/Navbar';
import Banner from './Component/Banner';
import Textpad from './Component/Textpad';
import Delivery from './Component/Delivery';
import Map from './Component/Map';
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Cards/>
      <Textpad/>
      <Delivery/>
      <Map/>
      <Footer/>
    </>
  );
}

export default App;
