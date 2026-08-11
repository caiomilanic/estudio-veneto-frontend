import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Localizacao } from "./components/Localizacao";
import { ParaMorarInvestir } from "./components/ParaMorarInvestir";
import { Diferenciais } from "./components/Diferenciais";
import { Galeria } from "./components/Galeria";
import { Precos } from "./components/Precos";
import { FormularioLead } from "./components/FormularioLead";
import { SobreIncorporadora } from "./components/SobreIncorporadora";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Galeria />
      <ParaMorarInvestir />
      <Diferenciais />
      <Localizacao />
      <Precos /> 
      <FormularioLead />
      <SobreIncorporadora />
      <Footer />
    </>
  );
}

export default App;