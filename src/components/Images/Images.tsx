import { BsPersonCheck } from "react-icons/bs";
import {
  AiOutlineColumnHeight,
} from "react-icons/ai";
import {
  BiArrowBack,
  BiWorld,
} from "react-icons/bi";
import {
  MdWorkOutline,
  MdOutlineTimelapse,
} from "react-icons/md";
import { FaBaby } from "react-icons/fa";
import { IImages, IIcons } from "./Interfaces";

const iconContainerStyle = "flex items-center";

const imageContainerStyle = (
  size = "",
  maxWSm = "",
  maxWMd = "",
  maxWLg = "",
  maxWXl = "",
  itemsAlign = "start"
) =>
  `flex items-${itemsAlign} w-${size} h-${size} sm:w-${maxWSm} sm:h-${maxWSm} md:w-${maxWMd} md:h-${maxWMd} lg:w-${maxWLg} lg:h-${maxWLg} xl:w-${maxWXl} xl:h-${maxWXl}`;

const baseIconStyle = (
  color = "primary",
  size = "",
  maxWSm = "",
  maxWMd = "",
  maxWLg = "",
  maxWXl = ""
) =>
  `text-${color} w-${size} h-${size} sm:w-${maxWSm} sm:h-${maxWSm} md:w-${maxWMd} md:h-${maxWMd} lg:w-${maxWLg} lg:h-${maxWLg} xl:w-${maxWXl} xl:h-${maxWXl}`;

export const Avatar = ({
  altName,
  imgUrl = "https://",
  size = "full",
  maxWSm = size,
  maxWMd = size,
  maxWLg = size,
  maxWXl = size,
}: IImages) => {
  return (
    <div
      className={imageContainerStyle(size, maxWSm, maxWMd, maxWLg, maxWXl)}
    >
      <img src={imgUrl} alt={altName} className="w-full" />
    </div>
  );
};

export const ReturnIcon = ({
  title,
  color,
  size = "6",
  maxWSm = size,
  maxWMd = size,
  maxWLg = size,
  maxWXl = size,
}: IIcons) => {
  return (
    <div className={iconContainerStyle}>
      <BiArrowBack
        title={title}
        className={baseIconStyle(color, size, maxWSm, maxWMd, maxWLg, maxWXl)}
      />
    </div>
  );
};

export const NationalityIcon = ({
  title,
  color,
  size = "6",
  maxWSm = size,
  maxWMd = size,
  maxWLg = size,
  maxWXl = size,
}: IIcons) => {
  return (
    <div className={iconContainerStyle}>
      <BiWorld
        title={title}
        className={baseIconStyle(color, size, maxWSm, maxWMd, maxWLg, maxWXl)}
      />
    </div>
  );
};

export const OcuppationIcon = ({
  title,
  color,
  size = "6",
  maxWSm = size,
  maxWMd = size,
  maxWLg = size,
  maxWXl = size,
}: IIcons) => {
  return (
    <div className={iconContainerStyle}>
      <MdWorkOutline
        title={title}
        className={baseIconStyle(color, size, maxWSm, maxWMd, maxWLg, maxWXl)}
      />
    </div>
  );
};

export const HeightIcon = ({
  title,
  color,
  size = "6",
  maxWSm = size,
  maxWMd = size,
  maxWLg = size,
  maxWXl = size,
}: IIcons) => {
  return (
    <div className={iconContainerStyle}>
      <AiOutlineColumnHeight
        title={title}
        className={baseIconStyle(color, size, maxWSm, maxWMd, maxWLg, maxWXl)}
      />
    </div>
  );
};

export const BirthdayIcon = ({
  title,
  color,
  size = "6",
  maxWSm = size,
  maxWMd = size,
  maxWLg = size,
  maxWXl = size,
}: IIcons) => {
  return (
    <div className={iconContainerStyle}>
      <FaBaby
        title={title}
        className={baseIconStyle(color, size, maxWSm, maxWMd, maxWLg, maxWXl)}
      />
    </div>
  );
};

export const AgeIcon = ({
  title,
  color,
  size = "6",
  maxWSm = size,
  maxWMd = size,
  maxWLg = size,
  maxWXl = size,
}: IIcons) => {
  return (
    <div className={iconContainerStyle}>
      <MdOutlineTimelapse
        title={title}
        className={baseIconStyle(color, size, maxWSm, maxWMd, maxWLg, maxWXl)}
      />
    </div>
  );
};

export const CheckPersonIcon = ({
  title,
  color,
  size = "6",
  maxWSm = size,
  maxWMd = size,
  maxWLg = size,
  maxWXl = size,
}: IIcons) => {
  return (
    <div className={iconContainerStyle}>
      <BsPersonCheck
        title={title}
        className={baseIconStyle(color, size, maxWSm, maxWMd, maxWLg, maxWXl)}
      />
    </div>
  );
};

