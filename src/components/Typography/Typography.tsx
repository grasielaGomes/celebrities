import { ITypography } from './Interfaces';

const typographyStyles = (
  textSize = '',
  color = 'slate-700',
  textDecoration = '',
  isBold = false,
  isItalic = false,
  leading = 'distant',
): string => {
  return `leading-${leading} text-${textSize} text-${color} ${textDecoration} ${
    isBold ? 'font-bold' : 'font-normal'
  } ${isItalic ? 'italic' : ''}`;
};

export const Label = ({
  text,
  textDecoration = '',
  color = 'slate-500',
  isBold = false,
  isItalic = false,
}: ITypography) => {
  const style = `${isBold ? 'font-medium' : 'font-light'}`;
  return (
    <p className={typographyStyles('xs', color, textDecoration, false, isItalic) + style}>
      {text}
    </p>
  );
};

export const Caption = ({
  text,
  textDecoration,
  color = 'slate-500',
  isBold = false,
  isItalic = false,
}: ITypography) => {
  const style = `${isBold ? 'font-medium' : 'font-light'}`;
  return (
    <p className={typographyStyles('sm', color, textDecoration, false, isItalic) + style}>
      {text}
    </p>
  );
};

export const Body = ({
  text,
  textDecoration,
  color,
  isBold = false,
  isItalic = false,
}: ITypography) => {
  const style = `${isBold ? 'font-medium' : 'font-light'}`;
  return (
    <p
      className={typographyStyles('base', color, textDecoration, false, isItalic) + style}
    >
      {text}
    </p>
  );
};

export const Heading4 = ({
  text,
  textDecoration,
  color,
  isBold = false,
  isItalic = false,
}: ITypography) => {
  const style = `${isBold ? 'font-bold' : 'font-medium'}`;
  return (
    <h4
      className={typographyStyles('2xl', color, textDecoration, false, isItalic) + style}
    >
      {text}
    </h4>
  );
};

export const Heading5 = ({
  text,
  textDecoration,
  color,
  isBold = false,
  isItalic = false,
}: ITypography) => {
  const style = `${isBold ? 'font-bold' : 'font-medium'}`;
  return (
    <h4
      className={typographyStyles('xl', color, textDecoration, false, isItalic) + style}
    >
      {text}
    </h4>
  );
};

export const Heading6 = ({
  text,
  textDecoration,
  color,
  isBold = false,
  isItalic = false,
}: ITypography) => {
  const style = `${isBold ? 'font-medium' : 'font-normal'}`;
  return (
    <h5
      className={typographyStyles('lg', color, textDecoration, false, isItalic) + style}
    >
      {text}
    </h5>
  );
};
