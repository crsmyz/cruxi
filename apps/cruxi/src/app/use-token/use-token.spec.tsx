import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useToken from './use-token';

describe('useToken', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useToken());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
