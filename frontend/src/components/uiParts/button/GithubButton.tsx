import { Button } from '@mantine/core';
import Link from 'next/link';
import { BrandGithub } from 'tabler-icons-react';

export type GitHubButtonProps = {
  href: string;
};
export const GitHubButton: React.FC<GitHubButtonProps> = ({ href }) => {
  return (
    <Button
      component={Link}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      leftIcon={<BrandGithub size={18} />}
      styles={(theme) => ({
        root: {
          backgroundColor: theme.black,
          border: 0,
          height: 42,
          paddingLeft: 20,
          paddingRight: 20,
          borderRadius: theme.radius.md,

          '&:hover': {
            backgroundColor: theme.fn.lighten(theme.black, 0.1),
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
