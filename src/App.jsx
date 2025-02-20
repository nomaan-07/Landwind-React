import Overlay from "./components/Overlay";
import { ToggleMenuProvider } from "./contexts/ToggleMenuContext";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
