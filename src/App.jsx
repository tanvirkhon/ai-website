// Import components
import Hero from './components/Hero';
import Demo from './components/Demo';

// Import styles
import './App.css';

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient'></div>
      </div>

      <div className='app'>
        <Hero />
        <Demo />
      </div>
    </main>
  )
}

export default App