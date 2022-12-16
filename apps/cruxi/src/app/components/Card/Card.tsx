import styled from 'styled-components';
import { CardProps } from './Card.interface';
import { StyledCard, StyledLabel, StyledSelect, StyledOption } from './StyledCard';

export function Card(props: CardProps) {
  return (
    <StyledCard>
      {props.children}
    </StyledCard>
  );
}

export default Card;
