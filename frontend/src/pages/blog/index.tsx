import { Container, SimpleGrid } from '@mantine/core';
import { ArticleCard } from 'components/ArticleCard';
import { globby } from 'globby';
import { useMemo, useState } from 'react';

export type article = {
  id: string;
  title: string;
  image?: string;
  published: boolean;
  date: string;
};

const Page = ({ mdxFilesMeta }: { mdxFilesMeta: article[] }) => {
  // 昇順・降順の切り替え
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');

  const sortedMdxFilesMeta = useMemo(
    () =>
      mdxFilesMeta.sort((a, b) => {
        if (order === 'asc') {
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
