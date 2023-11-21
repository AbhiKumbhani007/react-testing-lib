import { render, screen } from '@testing-library/react';
import TestWithMockData from '../components/MockDataTest';
import mockData from '../constant/MockData';
import userEvent from '@testing-library/user-event';

test('List renders successfully', () => {
  render(<TestWithMockData data={mockData} displayUnorderedList={true} />);
  // here it should find fletcher on the list of users when this component is rendered
  expect(screen.getByText(/fletcher/i)).toBeInTheDocument();
});

test('List renders successfully', () => {
  render(<TestWithMockData data={mockData} displayUnorderedList={false} />);
  // here it should find McVanamy on the list of users when this component is rendered
  expect(screen.getByText(/McVanamy/i)).toBeInTheDocument();
});

test('Email link click handler called', async () => {
  const mockHandleClick = jest.fn();
  render(
    <TestWithMockData
      data={mockData}
      displayUnorderedList={true}
      handleClick={mockHandleClick}
    />
  );
  await userEvent.click(screen.getByText(/mmcvanamy0@e-recht24.de/i));
  expect(mockHandleClick).toHaveBeenCalled();
});
