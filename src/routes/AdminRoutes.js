import { Routes, Route } from "react-router-dom";
import HomeDashboard from "../dashboard/HomeDashboard";
import AgendamentoDetail from "../dashboard/AgendamentoDetail";
import LoginEmpresa from "../pages/LoginEmpresa";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/homedashboard" element={<HomeDashboard />} />
      <Route path="/agendamentos/:id" element={<AgendamentoDetail />} />
      <Route path="/login-empresa" element={<LoginEmpresa />} />
    </Routes>
  );
}

export default AdminRoutes;
