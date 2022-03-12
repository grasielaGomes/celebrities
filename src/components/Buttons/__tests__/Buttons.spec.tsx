import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Body } from '../../Typography/Typography';
import { MenuIcon } from '../../Images/Images';
import { FullButton, IconButton, TextButton } from '../Buttons';

describe('Buttons', () => {
  const text1 = 'Click here';
  const id = 'id';

  test('FullButton should be rendered when it gets all props', () => {
    render(
      <FullButton
        id={id}
        child={<Body text={text1} />}
        rounded={text1}
        isDisabled
        isOutlined
        isThin
        handleClick={() => 'hi'}
      />,
    );
    expect(screen.getByText(text1)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('IconButton should be rendered when it gets all props', () => {
    render(
      <IconButton id={id} child={<MenuIcon />} isDisabled handleClick={() => 'hi'} />,
    );
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('TextButton should be rendered when it gets all props', () => {
    render(
      <TextButton
        id={id}
        child={<Body text={text1} />}
        isDisabled
        handleClick={() => () => 'hi'}
      />,
    );
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
