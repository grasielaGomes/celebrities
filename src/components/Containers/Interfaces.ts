export interface IContainers {
  children: JSX.Element | JSX.Element[];
  maxWidth?: string;
  alignContent?: string;
}

export interface IGrid extends IContainers {
  gridKey?: string;
  smColumns?: string;
  mdColumns?: string;
  lgColumns?: string;
  xlColumns?: string;
  gap?: string;
}

export interface ICard extends IContainers {
  cardKey?: string;
  color?: string;
  borderRadius?: string;
  containerDecoration?: string;
  isOutlined?: boolean;
  paddingX?: string;
  paddingY?: string;
}

export interface IFlex extends IContainers {
  flexKey?: string;
  gap?: string;
  alignItems?: string;
  justifyContent?: string;
}
