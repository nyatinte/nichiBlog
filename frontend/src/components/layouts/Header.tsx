import {
  Box,
  Burger,
  Container,
  createStyles,
  Group,
  Header,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Logo } from './Logo';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    backgroundColor: theme.colors.green[2],
    paddingBottom: theme.spacing.xs,
    paddingRight: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  logo: {
    alignItems: 'center',
    width: 170,
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },
}));

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

export const BlogHeader = ({ links }: HeaderSimpleProps) => {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        void router.push(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={'10vh'}>
      <Container fluid className={classes.header}>
        <Box className={classes.logo}>
          <Logo />
        </Box>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </Header>
  );
};
