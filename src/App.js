import Navbar from './component/navbar';
import Services from './component/services';
import Specialities from './component/specialities';
import Testimonials from './component/testimonials';
import Footer from './footer';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Services />
      <Specialities />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
