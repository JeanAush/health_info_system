import { Routes, Route } from "react-router-dom";
import ClientProfile from "../client/pages/clientProfile";
import Clients from "../client/pages/clients";
import Programs from "../client/pages/programs";
import Landing from "../client/pages/landing";
const SystemRoutes = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/clients" element={<Clients />} />
    <Route path="/programs" element={<Programs />} />
    <Route path="/clients/:id" element={<ClientProfile />} />
  </Routes>
);

export default SystemRoutes;
