import styled from 'styled-components';

/* eslint-disable-next-line */
export interface RopesSectionProps {}

const StyledRopesSection = styled.div`
  color: pink;
`;

export function RopesSection(props: RopesSectionProps) {
  return (
    <StyledRopesSection>
      <h1>Welcome to RopesSection!</h1>
    </StyledRopesSection>
  );
}

export default RopesSection;
