import './App.css';
import Top from './components/topComponent'
import Features from './components/features';
import Testimonials from './components/Testimonials';
import Press from './components/Press';
import Pricing from './components/Pricing';
import Cta from './components/cta';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Top></Top>
      <Features></Features>
      <Testimonials></Testimonials>
      <Press></Press>
      <Pricing></Pricing>
      <Cta></Cta>
      <Footer></Footer>
    </div>
  );
}

export default App;
