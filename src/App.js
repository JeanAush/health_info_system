import { BrowserRouter as Router } from "react-router-dom";
import SystemRoutes from "./routes/systemRoutes";
import { ClientProvider } from "./client/context/clientContext";
import Navbar from "./client/components/shared/Navbar";

function App() {
  return (
    <ClientProvider>
      <Router>
        <Navbar />
        <SystemRoutes />
      </Router>
    </ClientProvider>
  );
}

export default App;
