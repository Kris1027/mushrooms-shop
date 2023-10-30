import { useRouteError } from 'react-router-dom';

import styled from 'styled-components';

const StyledErrorWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

type RouteError = {
  message: string;
  statusText: string;
};

export default function Error() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <StyledErrorWrapper id='error-page'>
      <h1>Oops!</h1>
      <p>Wybacz ale nie ma takiej strony, której szukasz...</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </StyledErrorWrapper>
  );
}
