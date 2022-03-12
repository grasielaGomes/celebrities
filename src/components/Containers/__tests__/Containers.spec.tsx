import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Caption } from '../../Typography/Typography';
import { Grid, Card, Flex, PageTemplate } from '../Containers';

describe('Containers', () => {
  const id = 'id';
  const text1 = 'Hello, card!';
  const text2 = 'This is a caption!';
  const text3 = 'Hello, grid!';
  const text4 = 'This is a test!';

  test('PageTemplate should be rendered when receive child', () => {
    render(
      <PageTemplate>
        <Card>
          <Caption text={text1} />
          <Caption text={text2} />
        </Card>
      </PageTemplate>,
    );

    expect(screen.getByText(text1)).toBeInTheDocument();
    expect(screen.getByText(text2)).toBeInTheDocument();
  });

  test('PageTemplate should be rendered when receive children', () => {
    render(
      <PageTemplate>
        <Card>
          <Caption text={text1} />
        </Card>
        <Card>
          <Caption text={text2} />
        </Card>
      </PageTemplate>,
    );

    expect(screen.getByText(text1)).toBeInTheDocument();
    expect(screen.getByText(text2)).toBeInTheDocument();
  });

  test('Card should be rendered when receive props', () => {
    render(
      <Card color="neutral-100" borderRadius="xs" containerDecoration="none" cardKey={id}>
        <Caption text={text1} />
        <Caption text={text2} />
      </Card>,
    );
    expect(screen.getByText(text1)).toBeInTheDocument();
    expect(screen.getByText(text2)).toBeInTheDocument();
  });

  test('Flex should be rendered when receive props', () => {
    render(
      <Flex gap="2" alignItems="center" justifyContent="center" flexKey={id}>
        <Caption text={text1} />
        <Caption text={text2} />
      </Flex>,
    );
    expect(screen.getByText(text1)).toBeInTheDocument();
    expect(screen.getByText(text2)).toBeInTheDocument();
  });

  test('Grid should be rendered when receive props', () => {
    render(
      <Grid gridKey={id} smColumns="2" mdColumns="2" lgColumns="2" xlColumns="3" gap="9">
        <Card>
          <Caption text={text1} />
          <Caption text={text2} />
        </Card>
        <Card>
          <Caption text={text3} />
          <Caption text={text4} />
        </Card>
      </Grid>,
    );
    expect(screen.getByText(text1)).toBeInTheDocument();
    expect(screen.getByText(text2)).toBeInTheDocument();
    expect(screen.getByText(text3)).toBeInTheDocument();
    expect(screen.getByText(text4)).toBeInTheDocument();
  });
});
