import Navbar from "./components/Navbar";
import NavbarSM from "./components/NavbarSM";
import Footer from "./components/Footer";
import Help from "./page/Help";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
        <NavbarSM />
      </header>
      <Help />
      <Footer />
    </>
  );
};

export default App;
