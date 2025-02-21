import Overlay from "./ui/Overlay";
import { ToggleMenuProvider } from "./contexts/ToggleMenuContext";
import HomePage from "./pages/HomePage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import BackToTop from "./ui/BackToTop";

function App() {
  return (
    <ToggleMenuProvider>
      <Header />
      <HomePage />
      <Footer></Footer>
      <BackToTop />
      <Overlay />
    </ToggleMenuProvider>
  );
}

export default App;
