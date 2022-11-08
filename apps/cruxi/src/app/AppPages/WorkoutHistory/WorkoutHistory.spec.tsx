import { render } from '@testing-library/react';

import WorkoutHistory from './WorkoutHistory';

describe('WorkoutHistory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WorkoutHistory />);
    expect(baseElement).toBeTruthy();
  });
});
