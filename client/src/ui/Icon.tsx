import React, { FC } from "react";

interface IconProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Icon: FC<IconProps> = (props) => {
  const { src, alt, width, height } = props;
  return <img src={src} alt={alt} width={width} height={height} />;
};

export { Icon };
