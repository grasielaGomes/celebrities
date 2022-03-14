import React, { MouseEventHandler, ReactElement } from 'react';

export interface IButtons {
  isDisabled?: boolean;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  handleHover?: MouseEventHandler<HTMLButtonElement> | undefined;
  handleMouseOut?: MouseEventHandler<HTMLButtonElement> | undefined;
  hoverColor?: string;
  ariaLabel?: string;
}

export interface IParentButton extends IButtons {
  child: ReactElement;
}

export interface IImageButton extends IButtons {
  imgUrl: string;
  altText: string;
  borderRadius?: string;
  shadow?: string;
  filter?: string;
  width?: string;
}
