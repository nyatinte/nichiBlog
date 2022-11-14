import { Button } from '@mantine/core';
import Link from 'next/link';
import { BrandTwitter } from 'tabler-icons-react';

export type TwitterButtonProps = {
  href: string;
};
export const TwitterButton: React.FC<TwitterButtonProps> = ({ href }) => {
  return (
    <Button
      component={Link}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      leftIcon={<BrandTwitter size={18} />}
      styles={(theme) => ({
        root: {
          backgroundColor: '#00acee',
          border: 0,
          height: 42,
          paddingLeft: 20,
          paddingRight: 20,
          borderRadius: theme.radius.md,

          '&:hover': {
            backgroundColor: theme.fn.darken('#00acee', 0.05),
          },
        },

        leftIcon: {
          marginRight: 15,
        },
      })}
    >
      Twitter
    </Button>
  );
};
