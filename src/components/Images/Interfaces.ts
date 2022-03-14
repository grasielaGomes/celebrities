export interface IImagesIcons {
  size?: string;
  maxWSm?: string;
  maxWMd?: string;
  maxWLg?: string;
  maxWXl?: string;
}

export interface IImages extends IImagesIcons {
  altName?: string;
  imgUrl: string;
  width?: string;
  height?: string;
  itemsAlign?: string;
}

export interface IIcons extends IImagesIcons {
  color?: string;
  title?: string;
}

export interface IDisclosureIcon extends IIcons {
  isOpen?: boolean;
}
