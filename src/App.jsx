import StarField from './components/StarField'
import Balloons from './components/Balloon'
import Sparks from './components/Sparks'
import Moon from './components/Moon'
import EventCard from './components/EventCard'
import Footer from './components/Footer'

export default function App() {
  return (
    <div
      className="relative min-h-screen w-full"
      style={{ background: 'linear-gradient(170deg, #06091a 0%, #0d1b3e 45%, #130820 100%)' }}
    >
      {/* camada de fundo */}
      <StarField />
      <Moon />
      <Sparks />
      <Balloons />

      {/* conteúdo */}
      <EventCard />
      <Footer />
    </div>
  )
}
