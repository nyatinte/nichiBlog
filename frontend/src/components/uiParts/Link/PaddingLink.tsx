import { Tooltip } from '@mantine/core';
import { NextLink } from '@mantine/next';
import { ComponentProps } from 'react';

type TooltipLinkProps = {
  children?: React.ReactNode;
} & ComponentProps<'a'>;

export const TooltipLink = ({ children, href }: TooltipLinkProps) => {
  if (!href) {
    return <>{children}</>;
  }
  return (
    <Tooltip label={href} color="blue" withArrow>
      <NextLink
        legacyBehavior
        href={href}
        style={{
          display: 'inline-block',
          paddingRight: '0.25rem',
          paddingLeft: '0.25rem',
          fontWeight: 'bold',
          color: '#0066c0',
        }}
      >
        {children ?? ''}
      </NextLink>
    </Tooltip>
  );
};
