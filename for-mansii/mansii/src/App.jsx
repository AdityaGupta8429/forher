import { useEffect, useState } from 'react'
import { useParallax } from './hooks'
import Particles from './components/Particles'
import EnvelopeIntro from './components/EnvelopeIntro'
import HerName from './components/HerName'
import LittleThings from './components/LittleThings'
import MemoryGallery from './components/MemoryGallery'
import ChatWall from './components/ChatWall'
import LoveLetter from './components/LoveLetter'
import ReasonsWall from './components/ReasonsWall'
import NightSky from './components/NightSky'
import Question from './components/Question'
import FinalLetter from './components/FinalLetter'
import FloatingNav from './components/FloatingNav'
import MusicPlayer from './components/MusicPlayer'

export default function App() {
  const [opened, setOpened] = useState(false)
  useParallax()

  // the page can't be scrolled until the envelope is opened
  useEffect(() => {
    document.documentElement.classList.toggle('locked', !opened)
    if (opened) window.scrollTo(0, 0)
  }, [opened])

  return (
    <>
      <Particles />
      <EnvelopeIntro onOpen={() => setOpened(true)} />
      <main className={`journey ${opened ? 'ready' : ''}`}>
        <HerName active={opened} />
        <LittleThings />
        <MemoryGallery />
        <ChatWall />
        <LoveLetter />
        <ReasonsWall />
        <NightSky />
        <Question />
        <FinalLetter />
      </main>
      <FloatingNav visible={opened} />
      <MusicPlayer visible={opened} />
    </>
  )
}
