import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { type LoginProps, login as loginApi } from '../services/apiAuth';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }: LoginProps) =>
      loginApi({
        email,
        password,
      }),
    onSuccess: (user) => {
      queryClient.setQueriesData(['user'], user);
      navigate('/admin-dashboard');
    },
    onError: (err) => {
      console.log('ERROR', err);
    },
  });

  return { login, isLoading };
}
