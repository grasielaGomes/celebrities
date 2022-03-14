import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label, Caption, Body, Heading5, Heading4, Heading6, Heading1 } from '../Typography';

describe('Typography', () => {
  const text = 'Text';
  const color = 'primary';
  const textDecoration = 'underline';

  test('Label should render with props values', () => {
    render(<Label text={text} color={color} textDecoration={textDecoration} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('Caption should render with props values', () => {
    render(<Caption text={text} color={color} textDecoration={textDecoration} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('Body should render with props values', () => {
    render(<Body text={text} color={color} textDecoration={textDecoration} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test("Heading1 should render with props values", () => {
    render(
      <Heading1 text={text} color={color} textDecoration={textDecoration} />
    );

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('Heading4 should render with props values', () => {
    render(
      <Heading4 text={text} color={color} textDecoration={textDecoration} />,
    );

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('Heading5 should render with props values', () => {
    render(
      <Heading5 text={text} color={color} textDecoration={textDecoration} />,
    );

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('Heading6 should render with props values', () => {
    render(
      <Heading6 text={text} color={color} textDecoration={textDecoration} />,
    );

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
