import { IImageButton, IParentButton } from './Interfaces';

const disabledStyles = (isDisabled: boolean): string => {
  return isDisabled ? 'filter grayscale cursor-not-allowed' : '';
};

export const ImageButton = ({
  imgUrl = '',
  altText = '',
  borderRadius = 'none',
  shadow = 'none',
  filter = 'none',
  hoverColor = '',
  isDisabled = false,
  handleClick,
  width = 'full',
}: IImageButton) => {
  const animation = `transition-colors duration-300 ease-in-out transform ${hoverColor}`;
  const styles = `rounded-${borderRadius} w-${width} ${filter} ${shadow}`;
  return (
    <button
      disabled={isDisabled}
      type="button"
      className={`${styles} ${animation} ${disabledStyles(isDisabled)}`}
      onClick={handleClick}
    >
      <img src={imgUrl} alt={altText} />
    </button>
  );
};

export const IconButton = ({
  child,
  isDisabled = false,
  handleClick,
  hoverColor = "primary",
  ariaLabel = "",
}: IParentButton) => {
  const styles = "max-w-max";
  const animation = `transition-colors duration-300 ease-in-out transform hover:text-${hoverColor}`;
  return (
    <button
      aria-label={ariaLabel}
      disabled={isDisabled}
      type="button"
      className={`${styles} ${animation} ${disabledStyles(isDisabled)}`}
      onClick={handleClick}
    >
      {child}
    </button>
  );
};

export const TextButton = ({
  child,
  isDisabled = false,
  handleClick,
}: IParentButton) => {
  const styles = "max-w-max";
  return (
    <button
      disabled={isDisabled}
      type="button"
      className={`${styles} ${disabledStyles(isDisabled)}`}
      onClick={handleClick}
    >
      {child}
    </button>
  );
};
