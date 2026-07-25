import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { Servicos } from "./components/sections/Servicos";
import { Sobre } from "./components/sections/Sobre";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
      </main>
    </>
  )
}

export default App
