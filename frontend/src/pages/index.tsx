import { Container, Paper, Title } from '@mantine/core';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <Container p="md" sx={{ textAlign: 'center' }}>
      <Paper shadow="xs" p="md">
        <Title>Hello Next.js + Mantine</Title>
      </Paper>
    </Container>
  );
};

export default Page;
