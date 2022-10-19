import { render } from '@testing-library/react';

import LogWorkout from './log-workout';

describe('LogWorkout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LogWorkout />);
    expect(baseElement).toBeTruthy();
  });
});
