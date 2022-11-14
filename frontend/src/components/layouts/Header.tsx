import {
  Box,
  Burger,
  Container,
  createStyles,
  Drawer,
  Group,
  Header,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { DrawerContent } from './DrawerContent';
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
    lineHeight: 2,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
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
  drawerDrawer: {
    backgroundColor: theme.fn.rgba(theme.white, 0.8),
  },
  drawerTitle: {
    marginRight: 'auto',
    marginLeft: 'auto',
  },
}));

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

export const BlogHeader = ({ links }: HeaderSimpleProps) => {
  const router = useRouter();
  const rootPath = router.pathname.split('/')[1];
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: `/${rootPath}` === link.link,
      })}
      onClick={async (event) => {
        event.preventDefault();
        await router.push(link.link);
      }}
    >
      {link.label}
    </Link>
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
        <Drawer
          opened={opened}
          onClose={close}
          title={<Logo />}
          padding="xl"
          overlayOpacity={0}
          overlayBlur={0}
          withCloseButton={false}
          size="md"
          classNames={{
            drawer: classes.drawerDrawer,
            title: classes.drawerTitle,
          }}
        >
          <DrawerContent links={links} onClose={close} />
        </Drawer>
      </Container>
    </Header>
  );
};
