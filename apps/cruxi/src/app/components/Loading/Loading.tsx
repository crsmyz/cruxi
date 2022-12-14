import React from 'react';
// interfaces
import { LoadingProps } from './Loading.interface';
// styles
import { StyledLoading } from './StyledLoading';

export function Loading(props: LoadingProps) {
  return (
    <StyledLoading>
      <h1>Welcome to Loading!</h1>
    </StyledLoading>
  );
}

export default Loading;
