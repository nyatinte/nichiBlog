import { Button } from '@mantine/core';
import Link from 'next/link';
import { BrandGmail } from 'tabler-icons-react';

export type GmailButtonProps = {
  href: string;
};
export const GmailButton: React.FC<GmailButtonProps> = ({ href }) => {
  return (
    <Button
      component={Link}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      leftIcon={<BrandGmail size={18} />}
      styles={(theme) => ({
        root: {
          backgroundColor: theme.colors.red[3],
          border: 0,
          height: 42,
          paddingLeft: 20,
          paddingRight: 20,
          borderRadius: theme.radius.md,

          '&:hover': {
            backgroundColor: theme.fn.lighten(theme.colors.red[3], 0.1),
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
    >
      GitHub
    </Button>
  );
};
