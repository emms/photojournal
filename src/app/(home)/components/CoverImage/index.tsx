"use client";

import { FC } from "react";
import styled from "styled-components";
import Image from "next/image";

export const StyledCoverImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

type TCoverImageProps = {
  coverImage: TCoverImage;
};

type TCoverImage = {
  url: string;
  width: number;
  height: number;
};

const CoverImage: FC<TCoverImageProps> = ({ coverImage }) => (
  <StyledCoverImage
    src={coverImage?.url}
    alt="Picture of the author"
    width={coverImage?.width}
    height={coverImage?.height}
    priority
  />
);

export default CoverImage;
