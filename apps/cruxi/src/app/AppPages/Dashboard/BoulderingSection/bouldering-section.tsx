import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BoulderingSectionProps {}

const StyledBoulderingSection = styled.div`
  color: pink;
`;

export function BoulderingSection(props: BoulderingSectionProps) {
  return (
    <StyledBoulderingSection>
      <h1>Welcome to BoulderingSection!</h1>
    </StyledBoulderingSection>
  );
}

export default BoulderingSection;
