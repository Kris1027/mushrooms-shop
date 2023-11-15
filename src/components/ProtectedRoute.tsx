import { useNavigate } from 'react-router-dom';
import { useUser } from '../authentication/useUser';
import AdminDashboard from '../pages/AdminDashboard';
import Spinner from './Spinner';
import { useEffect } from 'react';

export default function ProtectedRoute() {
  const navigate = useNavigate();

  const { isLoading, isAuthenicated } = useUser();

  useEffect(
    function () {
      if (!isAuthenicated && !isLoading) navigate('/');
    },
    [isAuthenicated, isLoading, navigate]
  );

  if (isLoading) return <Spinner />;

  if (isAuthenicated) return <AdminDashboard />;
}
