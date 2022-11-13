import { AspectRatio } from '@mantine/core';
import LogoImage from 'images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/">
      <AspectRatio
        ratio={LogoImage.width / LogoImage.height}
        style={{ width: '200px' }}
      >
        <Image src={LogoImage} alt="article.image" />
      </AspectRatio>
    </Link>
  );
};
