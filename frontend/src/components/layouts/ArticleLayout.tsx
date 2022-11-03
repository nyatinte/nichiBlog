import { Box, Container, createStyles, Divider, Title } from '@mantine/core';
import MDXCustomProvider from 'components/MDXCustomProvider';
import { CircleDate } from 'components/uiParts/date/CircleDate';
import type { article } from 'pages/blog';
import { ReactNode } from 'react';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#f7fee7',
    height: '100vh',
    width: '100%',
    paddingTop: theme.spacing.xl,
  },
  container: {
    backgroundColor: 'white',
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.sm,
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.md,
    gap: theme.spacing.md,
  },
  title: {
    marginBottom: theme.spacing.md,
  },
  text: {
    marginBottom: theme.spacing.md,
  },
}));

type ArticleLayoutProps = {
  children: ReactNode;
  meta: article;
};
export const ArticleLayout = ({ children, meta }: ArticleLayoutProps) => {
  const { classes } = useStyles();
  const { title, date } = meta;
  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
        <Box className={classes.info}>
          <Title className={classes.title}>{title}</Title>
          <CircleDate date={new Date(date)} />
        </Box>
        <Divider mb={'md'} />
        <MDXCustomProvider>{children}</MDXCustomProvider>
      </Container>
    </Box>
  );
};
