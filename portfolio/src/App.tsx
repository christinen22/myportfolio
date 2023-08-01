import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="text-gray-400 bg-gray-900 body-font">
          <Header />
          <Pages />
          <Footer />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
