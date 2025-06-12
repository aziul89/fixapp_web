import { Routes, Route } from "react-router-dom";
import HomeDashboard from "../dashboard/HomeDashboard";
import AgendamentoDetail from "../dashboard/AgendamentoDetail";
import LoginEmpresa from "../pages/LoginEmpresa";
import NotFound from "../components/NotFound";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/homedashboard" element={<HomeDashboard />} />
      <Route path="/agendamentos/:id" element={<AgendamentoDetail />} />
      <Route path="/login-empresa" element={<LoginEmpresa />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AdminRoutes;
