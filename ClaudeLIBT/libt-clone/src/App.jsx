import Header from './components/Header'
import Hero from './components/Hero'
import FeelingLostSection from './components/FeelingLostSection'
import CourseSection from './components/CourseSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <FeelingLostSection />
        <CourseSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
