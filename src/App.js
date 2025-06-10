import { useLocation } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import ClientRoutes from './routes/ClientRoutes';
import AdminRoutes from './routes/AdminRoutes';

function App() {
  const location = useLocation();

  // Rota da empresa que não deve mostrar navbar/footer
  const adminPaths = ["/homedashboard", "/agendamentos", "/login-empresa"];
  const isAdminRoute = adminPaths.some(path => location.pathname.startsWith(path));

  return (
    <>
      {!isAdminRoute && (
        <>
          <Navbar />
          <ScrollToTop />
        </>
      )}

      <div className="main-content">
        <ClientRoutes />
        <AdminRoutes />
      </div>

      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
