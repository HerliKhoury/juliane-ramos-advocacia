import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { Sobre } from "./components/sections/Sobre";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
      </main>
    </>
  )
}

export default App
