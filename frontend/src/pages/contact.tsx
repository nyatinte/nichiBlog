import { Box, Container, createStyles, Title } from '@mantine/core';
import { GitHubButton } from 'components/uiParts/button/GithubButton';
import { TwitterButton } from 'components/uiParts/button/TwitterButton';
import { LinkCard } from 'components/uiParts/card/LinkCard';
import type { NextPage } from 'next';

const useStyles = createStyles((theme) => {
  return {
    container: {
      paddingTop: 100,
      paddingBottom: 100,
    },
    buttonWrapper: {
      display: 'flex',
      gap: 20,
      justifyContent: 'center',
      padding: 20,
    },
  };
});
const Page: NextPage = () => {
  const { classes } = useStyles();
  return (
    <Container className={classes.container}>
      <Title order={1}>ご連絡はこちらから</Title>
      <Box className={classes.buttonWrapper}>
        <GitHubButton href="https://github.com/nyatinte" />
        <TwitterButton href="https://twitter.com/nichi_pro_" />
      </Box>
      <Title order={2}>zennでも記事書いてます。</Title>
      <LinkCard url="https://zenn.dev/nyatinte" />
    </Container>
  );
};

export default Page;
