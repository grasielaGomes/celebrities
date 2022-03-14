import { IGrid, ICard, IFlex, IContainers } from "./Interfaces";

export const PageTemplate = ({
  children,
  maxWidth = "full",
  alignContent = "center",
}: IContainers) => {
  return (
    <section
      className={`mx-auto min-h-screen grid content-${alignContent} lg:w-${maxWidth}`}
    >
      {children}
    </section>
  );
};

export const Grid = ({
  gridKey,
  children,
  smColumns = "2",
  mdColumns = "1",
  lgColumns = "1",
  xlColumns = "1",
  gap = "4",
}: IGrid) => {
  const style = `grid grid-cols-1 sm:grid-cols-${smColumns} md:grid-cols-${mdColumns} lg:grid-cols-${lgColumns} xl:grid-cols-${xlColumns} gap-${gap}`;
  return (
    <section key={gridKey} className={style}>
      {children}
    </section>
  );
};

export const Card = ({
  cardKey,
  children,
  color = "transparent",
  borderRadius = "rounded",
  containerDecoration = "",
  isOutlined = true,
  paddingX = "5",
  paddingY = "5",
}: ICard) => {
  const style = `py-${paddingY} px-${paddingX} rounded-${borderRadius} ${containerDecoration} ${
    isOutlined ? `border border-${color}` : `bg-${color}`
  }`;
  return (
    <section key={cardKey} className={style}>
      {children}
    </section>
  );
};

export const Flex = ({
  flexKey,
  children,
  gap = "4",
  alignItems = "center",
  justifyContent = "between",
}: IFlex) => {
  const style = `flex w-full gap-${gap} items-${alignItems} justify-${justifyContent}`;
  return (
    <section key={flexKey} className={style}>
      {children}
    </section>
  );
};
