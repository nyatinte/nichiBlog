import { AspectRatio, Box, Image } from '@mantine/core';
import LogoImage from 'images/logo.png';

export const Logo = () => {
  return (
    <Box sx={{ width: '10%' }}>
      <AspectRatio
        ratio={LogoImage.width / LogoImage.height}
        sx={{ maxHeight: '20%' }}
      >
        <Image src={LogoImage.src} alt="article.image" />
      </AspectRatio>
    </Box>
  );
};
