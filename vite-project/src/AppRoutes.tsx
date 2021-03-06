import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import axios from "axios";
// components
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';
import { Home } from './pages/Home/Home';
import { DiscussoesTeste } from './pages/Discussoes/Discussoes';
import { AcessarDiscussao } from './pages/AcessarDiscussao/AcessarDiscussao';
import { CriaDiscussao } from './pages/CriaDiscussao/CriaDiscussao';
import { CriaComentario } from './pages/CriaComentario/CriaComentario';
import { Perfil } from './pages/Pefil/Perfil';
import { Navbar } from './pages/components/Navbar/Navbar';
import { NotFound } from './pages/NotFound/NotFound';
import { MinhasDiscussoes } from "./pages/MinhasDiscussoes/MinhasDiscussoes";

export function AppRoutes() {
  axios.defaults.baseURL = 'http://localhost:3001';
  axios.defaults.withCredentials = true;
  return (
    <div className="AppRoutes">
      <Router>

        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="home" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="discussao/:id_disc" element={<DiscussoesTeste />} />
            <Route path="discussao/acessaDiscussao/:id_disc" element={<AcessarDiscussao />} />
            <Route path="discussao/:id_disc/criaDiscussao" element={<CriaDiscussao />} />
            <Route path="discussao/acessaDiscussao/:id_disc/CriaComentario" element={<CriaComentario />} />
            <Route path="minhasDiscussoes" element={<MinhasDiscussoes />} />
            {/* provisoria de perfil */}
            <Route path="paginaPerfil" element={<Perfil />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
