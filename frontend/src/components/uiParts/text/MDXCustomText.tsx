import { Box } from '@mantine/core';
import { ComponentProps } from 'react';

import { AlertCard } from '../card/AlertCard';
import { LinkCard } from '../card/LinkCard';

type MDXCustomTextProps = {
  children?: React.ReactNode;
} & Omit<ComponentProps<'p'>, 'children'>;

export const MDXCustomText = ({ children }: MDXCustomTextProps) => {
  if (!children) {
    return <br />;
  }
  if (typeof children !== 'string') {
    return <>{children}</>;
  }
  const url = children.match(/https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+/g);
  if (url) {
    return (
      <Box style={{ padding: '2rem' }}>
        <LinkCard url={url[0]} />
      </Box>
    );
  }

  if (children.startsWith('::warning')) {
    return (
      <AlertCard>
        {children.replace('::warning', '').replace('::', '')}
      </AlertCard>
    );
  }
  return <>{children}</>;
};
