import { Box, Text } from '@mantine/core';
import { ComponentProps } from 'react';

import { LinkCard } from '../card/LinkCard';

type MDXCustomTextProps = {
  children?: React.ReactNode;
} & Omit<ComponentProps<'p'>, 'children'>;

export const MDXCustomText = ({ children }: MDXCustomTextProps) => {
  if (!children) {
    return <br />;
  }
  if (typeof children === 'string') {
    const url = children.match(/https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+/g);
    if (url) {
      return (
        <Box style={{ padding: '2rem' }}>
          <LinkCard url={url[0]} />
        </Box>
      );
    }
  }
  return <Text>{children}</Text>;
};
