import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Pages />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
