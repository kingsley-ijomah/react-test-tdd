import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  let button = null;

  beforeEach(() => {
    button = render(<Button label="Click me now!" />);
  });

  it('should render a button', () => {
    expect(button).toBeTruthy();
  });

  it('renders with label', () => {
    expect(button.getByTestId('button')).toHaveTextContent('Click me now!');
  });

  it('renders with class', () => {
    expect(button.getByTestId('button')).toHaveClass('button-style');
  });

  it('renders with data-testid', () => {
    expect(button.getByTestId('button')).toHaveAttribute('data-testid');
  });

  it('renders with correct type', () => {
    expect(button.getByTestId('button')).toHaveAttribute('type', 'button');
  });

  it('renders `click me` on screen', () => {
    expect(button.getByTestId('click-me')).toBeTruthy();
  });

  it('does not render `you clicked me` by default', () => {
    expect(button.queryByTestId('you-click-me')).toBeFalsy();
  });

  it('renders `you clicked me` when clicked', () => {
    fireEvent.click(button.queryByTestId('button'));

    expect(button.queryByTestId('you-clicked-me')).toBeTruthy();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Button label="Click me now!" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
