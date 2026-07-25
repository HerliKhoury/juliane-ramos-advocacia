import { Header } from "./components/layout/Header";
import { CtaFinal } from "./components/sections/CtaFinal";
import { Hero } from "./components/sections/Hero";
import { Processo } from "./components/sections/Processo";
import { ProvaSocial } from "./components/sections/ProvaSocial";
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
        <ProvaSocial />
        <CtaFinal />
      </main>
    </>
  )
}

export default App
