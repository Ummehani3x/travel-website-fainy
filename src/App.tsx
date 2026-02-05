import Hero from './components/Hero';
import Destinations from './components/Destinations';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-purple-50 min-h-screen font-sans selection:bg-purple-200 selection:text-purple-900">
      <Hero />
      <Destinations />
      <About />
      <Footer />
    </div>
  );
}

export default App;
