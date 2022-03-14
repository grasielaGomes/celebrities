import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  Avatar,
  ReturnIcon,
  NationalityIcon,
  OcuppationIcon,
  HeightIcon,
  BirthdayIcon,
  AgeIcon,
  CheckPersonIcon,
} from "../Images";

describe('Images and icons', () => {
  const color = 'primary';
  const url = 'http://';
  const altName = 'name';
  const title = 'icon';
  const size = '10';
  const wSm = '30';
  const wMd = '30';
  const wLg = '30';
  const wXl = '30';

  test('Avatar should be rendered when it gets all props', () => {
    render(
      <Avatar
        imgUrl={url}
        altName={altName}
        maxWSm={wSm}
        maxWMd={wMd}
        maxWLg={wLg}
        maxWXl={wXl}
      />,
    );
    expect(screen.getByAltText(altName)).toBeInTheDocument();
  });

  test("NationalityIcon should be rendered when it gets all props", () => {
    render(
      <NationalityIcon
        size={size}
        color={color}
        title={title}
        maxWSm={wSm}
        maxWMd={wMd}
        maxWLg={wLg}
        maxWXl={wXl}
      />
    );
    expect(screen.getByTitle(title)).toBeInTheDocument();
  });

  test('ReturnIcon should be rendered when it gets all props', () => {
    render(
      <ReturnIcon
        size={size}
        color={color}
        title={title}
        maxWSm={wSm}
        maxWMd={wMd}
        maxWLg={wLg}
        maxWXl={wXl}
      />,
    );
    expect(screen.getByTitle(title)).toBeInTheDocument();
  });

  test("OcuppationIcon should be rendered when it gets all props", () => {
    render(
      <OcuppationIcon
        size={size}
        color={color}
        title={title}
        maxWSm={wSm}
        maxWMd={wMd}
        maxWLg={wLg}
        maxWXl={wXl}
      />
    );
    expect(screen.getByTitle(title)).toBeInTheDocument();
  });

  test("HeightIcon should be rendered when it gets all props", () => {
    render(
      <HeightIcon
        size={size}
        color={color}
        title={title}
        maxWSm={wSm}
        maxWMd={wMd}
        maxWLg={wLg}
        maxWXl={wXl}
      />
    );
    expect(screen.getByTitle(title)).toBeInTheDocument();
  });

  test("AgeIcon should be rendered when it gets all props", () => {
    render(
      <AgeIcon
        size={size}
        color={color}
        title={title}
        maxWSm={wSm}
        maxWMd={wMd}
        maxWLg={wLg}
        maxWXl={wXl}
      />
    );
    expect(screen.getByTitle(title)).toBeInTheDocument();
  });

  test("BirthdayIcon should be rendered when it gets all props", () => {
    render(
      <BirthdayIcon
        size={size}
        color={color}
        title={title}
        maxWSm={wSm}
        maxWMd={wMd}
        maxWLg={wLg}
        maxWXl={wXl}
      />
    );
    expect(screen.getByTitle(title)).toBeInTheDocument();
  });

  test("CheckPersonIcon should be rendered when it gets all props", () => {
    render(
      <CheckPersonIcon
        size={size}
        color={color}
        title={title}
        maxWSm={wSm}
        maxWMd={wMd}
        maxWLg={wLg}
        maxWXl={wXl}
      />
    );
    expect(screen.getByTitle(title)).toBeInTheDocument();
  });

});
