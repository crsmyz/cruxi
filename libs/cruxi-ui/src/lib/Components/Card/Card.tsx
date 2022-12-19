import styled from 'styled-components';
import { CardProps } from './Card.interface';
import { StyledCard, StyledLabel, StyledSelect, StyledOption } from './StyledCard';

export const Card = (props: CardProps) => {
  return (
    <StyledCard>
      {props.children}
    </StyledCard>
  );
}
