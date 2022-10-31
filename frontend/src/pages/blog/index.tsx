import { Box, Button, Container, SimpleGrid, Text } from '@mantine/core';
import { ArticleCard } from 'components/ArticleCard';
import { globby } from 'globby';
import { StaticImageData } from 'next/image';
import { useMemo, useState } from 'react';

export type article = {
  id: string;
  title: string;
  date: string;
  image?: StaticImageData | string;
  published: boolean;
};

const Page = ({ mdxFilesMeta }: { mdxFilesMeta: article[] }) => {
  // 昇順・降順の切り替え
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const handleClickToggleOrder = () => {
    setOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };

  const sortedMdxFilesMeta = useMemo(
    () =>
      mdxFilesMeta.sort((a, b) => {
        if (order === 'desc') {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        }

        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }),
    [mdxFilesMeta, order]
  );

  const cards = sortedMdxFilesMeta.map((article) => {
    if (article.published) {
      return <ArticleCard key={article.id} article={article} />;
    }
  });

  return (
    <Container py="xl">
      <Box>
        <Button onClick={handleClickToggleOrder}>
          {order === 'desc' ? '昇順' : '降順'}に並び替え
        </Button>
        <Text>現在の並び順: {order}</Text>
      </Box>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
};

export default Page;

// .mdxファイルを読み込み、記事の情報を取得する
export async function getStaticProps() {
  const mdxFiles = await globby('src/pages/blog/*.mdx');
  const mdxFilesName = mdxFiles.map((file) => file.split('/').pop());
  const mdxFilesMeta = mdxFilesName.map(async (file) => {
    // jsonにundifinedが入っているとエラーになるので、nullを入れる
    try {
      const { meta } = await import(`/${file}`);
      if (meta) {
        return meta as article;
      }
      return null;
    } catch (e) {
      return null;
    }
  });

  return {
    // propsとして渡す
    props: {
      mdxFilesMeta: (await Promise.all(mdxFilesMeta)).filter(
        (article) => article !== null
      ) as article[],
    },
  };
}
