import { Container, Text, Title } from '@mantine/core';
import { ReactNode } from 'react';

type meta = {
  title: string;
  description: string;
  publishedAt: string;
  image?: string;
};
type ArticleLayoutProps = {
  children: ReactNode;
  meta: meta;
};
export const ArticleLayout = ({ children, meta }: ArticleLayoutProps) => {
  return (
    <Container>
      <Title>{meta.title}</Title>
      <Text size="xs">{meta.description}</Text>
      <Text size="xs">{meta.publishedAt}</Text>
      {children}
    </Container>
  );
};
