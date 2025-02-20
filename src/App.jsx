import Overlay from "./ui/Overlay";
import { ToggleMenuProvider } from "./contexts/ToggleMenuContext";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <ToggleMenuProvider>
      <Header />
      <HomePage />
      <Footer></Footer>
      <Overlay />
    </ToggleMenuProvider>
  );
}

export default App;
