import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

// Must render instructions
test('renders header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Enter your info to calculate your BMI/i);
  expect(linkElement).toBeInTheDocument();
});

// App Component should render 1 select dom node
describe('App', () => {
  it('should render a <div />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('select').length).toEqual(1);
  });
});
