import Dashboard from "@/components/AdminPage/Dashboard";
import Navbar from "@/components/Shared/Navbar";
import AdminProtectedRoute from "@/components/protected-routes/AdminProtectedRoute";

export default function AdminPage() {
  return (
    <main>
      <Navbar />
      <AdminProtectedRoute>
        <Dashboard />
      </AdminProtectedRoute>
    </main>
  );
}
