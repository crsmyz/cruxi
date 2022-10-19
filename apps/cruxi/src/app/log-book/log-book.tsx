import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LogBookProps {}

const StyledLogBook = styled.div`
  color: pink;
`;

export function LogBook(props: LogBookProps) {
  return (
    <StyledLogBook>
      <h1>Welcome to LogBook!</h1>
    </StyledLogBook>
  );
}

export default LogBook;
