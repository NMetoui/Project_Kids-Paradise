import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouteLivre } from "./components/UserLivre/RouteLivre";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import VideoList from "./components/UserVideo/VideoList";
import Alire from "./pages/Alire";
import Livre from "./components/UserLivre/Livre";
import EditBook from "./components/AdminLivre/EditBook";
import AdminLivre from "./pages/AdminLivre";
import AdminVideo from "./pages/AdminVideo";
import EditVideo from "./components/AdminVideo.js/EditVideo";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Alire" element={<Alire />} />
          <Route path="/Alire/:id" element={<Livre />} />

          <Route path="/Avoir" element={<VideoList />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/tuto" element={<Accueil />} />
          <Route path="/AdminLivre" element={<AdminLivre />} />
          <Route path="/AdminLivre/:id" element={<EditBook />} />

          <Route path="/AdminVideo" element={<AdminVideo />} />
          <Route path="/AdminVideo/:id" element={<EditVideo />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
