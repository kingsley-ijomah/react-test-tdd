import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  beforeEach(() => {
    render(<Button label="Click me now!" />);
  });

  it('should render a button', () => {
    const button = screen.getByTestId('toggle-button');
    expect(button).toBeTruthy();
  });

  it('renders with label', () => {
    expect(screen.getByTestId('toggle-button')).toHaveTextContent(
      'Click me now!'
    );
  });

  it('renders with class', () => {
    expect(screen.getByTestId('toggle-button')).toHaveClass('button-style');
  });

  it('renders with data-testid', () => {
    expect(screen.getByTestId('toggle-button')).toHaveAttribute('data-testid');
  });

  it('renders with correct type', () => {
    expect(screen.getByTestId('toggle-button')).toHaveAttribute(
      'type',
      'button'
    );
  });

  it('renders `click me` on screen', () => {
    expect(screen.getByTestId('click-me')).toBeTruthy();
  });

  it('does not render `you clicked me` by default', () => {
    expect(screen.queryByTestId('you-click-me')).toBeFalsy();
  });

  it('renders `you clicked me` when clicked', () => {
    fireEvent.click(screen.queryByTestId('toggle-button'));

    expect(screen.queryByTestId('you-clicked-me')).toBeTruthy();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Button label="Click me now!" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
