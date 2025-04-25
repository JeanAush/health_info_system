import { BrowserRouter as Router } from "react-router-dom";
import SystemRoutes from "./routes/systemRoutes";
import { ClientProvider } from "./client/context/clientContext";


function App() {
  return (
    <ClientProvider>
      <Router>
        <SystemRoutes />
      </Router>
    </ClientProvider>
  );
}

export default App;
