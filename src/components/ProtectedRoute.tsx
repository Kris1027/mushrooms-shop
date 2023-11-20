import { useUser } from '../authentication/useUser';
import AdminDashboard from '../pages/AdminDashboard';
import Spinner from './Spinner';

export default function ProtectedRoute() {
  const { isLoading, isAuthenicated } = useUser();

  if (isLoading) return <Spinner />;

  if (isAuthenicated) return <AdminDashboard />;
}
