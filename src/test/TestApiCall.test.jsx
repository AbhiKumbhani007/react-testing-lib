import { render, screen, waitFor } from '@testing-library/react';
import * as services from '../utils/services';
import TestingAPICalls from '../components/ApiCall';

const mockData = [
  {
    name: 'Kunal',
  },
  {
    name: 'Marcus',
  },
];

test('Fetch Data API called', async () => {
  const mockFetchData = jest
    .spyOn(services, 'FetchData')
    .mockImplementation(async () => {
      return mockData;
    });

  render(<TestingAPICalls />);
  expect(mockFetchData).toHaveBeenCalled();
  await waitFor(() => {
    expect(screen.getByText(/kunal/i)).toBeInTheDocument();
    expect(screen.getByText(/Marcus/i)).toBeInTheDocument();
  });
});
