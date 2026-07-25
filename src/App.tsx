import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";
import { Processo } from "./components/sections/Processo";
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
        <Processo />
      </main>
    </>
  )
}

export default App
