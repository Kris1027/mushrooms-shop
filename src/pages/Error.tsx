import { useRouteError } from 'react-router-dom';

import styled from 'styled-components';

type RouteError = {
  message: string;
  statusText: string;
};

export default function Error() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <ErrorWrapper id='error-page'>
      <h1>Oops!</h1>
      <Emoji>⛔️</Emoji>
      <p>Wybacz ale nie ma takiej strony, której szukasz...</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </ErrorWrapper>
  );
}

const ErrorWrapper = styled.main`
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vmin;
  justify-content: center;
`;

const Emoji = styled.div`
  font-size: 5rem;
`;
